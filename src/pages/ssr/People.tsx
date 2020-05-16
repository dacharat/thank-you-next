import { GetServerSideProps } from 'next'
import Link from 'next/link'

interface PeopleProps {
  names: string[]
}

const People = ({ names }: PeopleProps) => {
  return (
    <>
      <Link href="/ssr">
        <a>/ssr</a>
      </Link>
      <h1>Names</h1>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<PeopleProps> = async ctx => {
  const names = ['jack', 'jack2', 'jack3']
  return { props: { names } }
}

export default People
