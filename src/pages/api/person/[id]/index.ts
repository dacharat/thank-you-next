import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../../../utils/database'

const getPersonById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectDB()

  if (req.method === 'PUT') {
    const statement = await db.prepare(
      'UPDATE person SET name= ?, email = ? where id = ?',
    )
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id,
    )
    await result.stmt.finalize()
  }

  const person = await db.get('select * from person where id = ?', [
    req.query.id,
  ])
  res.json({ person })
}

export default getPersonById
