import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import { VehiclePerson } from '../api/type'

interface Props {
  owners?: VehiclePerson[]
}

const List = ({ owners }: Props) => {
  return (
    <div>
      {owners?.map((owner, i) => (
        <div key={i}>
          <Link
            as={`/${owner.vehicle}/${owner.ownerName}`}
            href="/[vehicles]/[person]"
          >
            <a>
              Navigate to {owner.ownerName}&apos;s {owner.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

// List.getInitialProps = async () => {
//   const response = await fetch('http://localhost:4001/vehicles')
//   const owners: VehiclePerson[] | undefined = await response.json()
//   return { owners }
// }

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles')
  const owners: VehiclePerson[] | undefined = await response.json()
  return { props: { owners } }
}

export default List
