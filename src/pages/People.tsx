import { NextPageContext } from 'next'
import { PeopleResponse } from '../interface/people'
import { withAuth } from '../hoc/withAuth'

const People = ({ people }: PeopleResponse) => {
  return <h1>{JSON.stringify(people)}</h1>
}

People.getInitialProps = async (ctx: NextPageContext) => {
  const people: PeopleResponse = await withAuth(
    'http://localhost:3000/api/people',
    ctx,
  )

  return { people }
}

export default People
