import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Microphone } from '../../../interface/microphone'
import { connectMicrophoneDB } from '../../../utils/database'

const MicrophoneDetail = ({
  id,
  brand,
  model,
  price,
  imageUrl,
}: Microphone) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading......I'm sorry for the wait!!</div>
  }

  return (
    <div>
      <div>{id}</div>
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price}</div>
      <div>{imageUrl}</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Microphone> = async ctx => {
  const id = ctx.params?.id as string
  const db = await connectMicrophoneDB()
  const microphone = await db.get('select * from microphone where id = ?', +id)

  return { props: microphone }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const db = await connectMicrophoneDB()
  const microphones = await db.all('select * from microphone')
  const paths = microphones.map(microphone => {
    return { params: { id: microphone.id.toString() } }
  })

  return {
    fallback: true,
    paths,
  }
}

export default MicrophoneDetail
