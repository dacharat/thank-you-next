import { GetStaticPaths } from 'next'
import Index, { getStaticProps } from './'
import { connectMicrophoneDB } from '../../utils/database'

interface CountMicrophone {
  total: number
}

export default Index
export { getStaticProps }

export const getStaticPaths: GetStaticPaths = async () => {
  const db = await connectMicrophoneDB()
  const { total }: CountMicrophone = (await db.get(
    'select count(*) as total from microphone',
  )) || { total: 0 }
  const numberOfPages = Math.ceil(total / 5.0)

  const paths = Array(numberOfPages - 1)
    .fill('')
    .map((_, index) => {
      return { params: { currentPage: (index + 1).toString() } }
    })

  return {
    fallback: false,
    paths,
  }
}
