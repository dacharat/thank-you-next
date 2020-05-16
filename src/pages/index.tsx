import HomePage from '../components/Homepage'
import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const Index = () => {
  return (
    <>
      <h1>Hello</h1>
      <HomePage />
    </>
  )
}

export const getServerSideProps = () => {
  return {
    props: {
      MY_SECRET: serverRuntimeConfig.MY_SECRET,
      API_ENDPOINT: publicRuntimeConfig.API_ENDPOINT,
    },
  }
}

export default Index
