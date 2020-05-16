import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Microphone } from '../../interface/microphone'
import { connectMicrophoneDB } from '../../utils/database'

export interface IndexProps {
  microphones: Microphone[]
}

const Index = ({ microphones }: IndexProps) => {
  return (
    <>
      <Link href="/ssr/people">
        <a>/ssr/people</a>
      </Link>
      <hr />
      <Grid container spacing={3}>
        {microphones.map(microphone => (
          <Grid item xs={12} sm={3} key={microphone.id}>
            <Link
              href="/ssg/microphone/[id]"
              as={`/ssg/microphone/${microphone.id}`}
            >
              <a>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={microphone.brand + ' ' + microphone.model}
                      height="300"
                      image={microphone.imageUrl}
                      title={microphone.brand + ' ' + microphone.model}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {microphone.brand + ' ' + microphone.model}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async ctx => {
  const db = await connectMicrophoneDB()
  const microphones = await db.all<Microphone[]>('select * from microphone')

  await new Promise(acc => setTimeout(acc, 3000))

  return { props: { microphones } }
}

export default Index
