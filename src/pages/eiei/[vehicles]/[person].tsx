import { useState, useEffect } from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { VehiclePerson } from '../../../interface/type'

interface Props {
  ownerInfo?: VehiclePerson[]
}

interface MyNextPageContext extends NextPageContext {
  query: {
    person: string
    vehicles: string
  }
}

const Person = ({ ownerInfo }: Props) => {
  const router = useRouter()
  const [info, setInfo] = useState(ownerInfo)

  useEffect(() => {
    if (ownerInfo?.length === 0) {
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

  if (!info?.[0]) {
    return <div>loading...</div>
  }

  return <pre>{JSON.stringify(info, null, 2)}</pre>
}

// export const getStaticPaths = async () => {
//   const response = await fetch('http://localhost:4001/vehicles')
//   const owners: VehiclePerson[] | undefined = await response.json()

//   const paths = owners?.map(owner => ({
//     params: { person: owner.ownerName, vehicles: owner.vehicle },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async ({ req, query }: NextPageContext) => {
//   if (!req) {
//     return { props: { ownerInfo: [] } }
//   }

//   const response = await fetch(
//     `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicles}`,
//   )
//   const ownerInfo = await response.json()
//   return { props: { ownerInfo } }
// }

Person.getInitialProps = async ({ req, query }: MyNextPageContext) => {
  if (!req) {
    return { ownerInfo: [] }
  }
  const response = await fetch(
    `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicles}`,
  )
  const ownerInfo = await response.json()
  return { ownerInfo }
}

export default Person
