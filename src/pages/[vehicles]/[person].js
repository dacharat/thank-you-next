import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

const Person = ({ ownerInfo }) => {
  const router = useRouter()
  const [info, setInfo] = useState(ownerInfo)

  useEffect(() => {
    if (ownerInfo.length == 0) {
      console.log('Failed on getInitialProps')
      loadData()
    }
  }, [])

  const loadData = async () => {
    const response = await fetch(
      `http://localhost:4001/vehicles?ownerName=${router.query.person}&vehicle=${router.query.vehicles}`,
    )
    const ownerInfo = await response.json()
    setInfo(ownerInfo)
  }

  if (!info[0]) {
    return <div>loading...</div>
  }

  return <pre>{JSON.stringify(info, null, 4)}</pre>
}

Person.getInitialProps = async context => {
  if (!context.req) {
    return { ownerInfo: [] }
  }

  const { query } = context
  const response = await fetch(
    `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicles}`,
  )
  const ownerInfo = await response.json()
  return { ownerInfo }
}

export default Person
