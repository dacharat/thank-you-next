import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const List = ({ owners }) => {
  return (
    <div>
      {owners.map((owner, i) => (
        <div key={i}>
          <Link
            as={`/${owner.vehicle}/${owner.ownerName}`}
            href="/[vehicle]/[person]"
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

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles')
  const owners = await response.json()
  return { owners }
}

export default List
