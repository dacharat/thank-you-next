import Link from 'next/link'

const people = [
  { vehicle: 'car', name: 'jack1' },
  { vehicle: 'bike', name: 'jack2' },
  { vehicle: 'airplane', name: 'jack3' },
]

const Detail = () => {
  return (
    <>
      {people.map((p, i) => (
        <div key={i}>
          <Link as={`/${p.vehicle}/${p.name}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {p.name}&apos;s {p.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Detail
