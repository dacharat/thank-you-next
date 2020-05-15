import { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcrypt'
import { connectDB } from '../../utils/database'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectDB()

  if (req.method === 'POST') {
    const hashed = await hash(req.body.password, 10)
    const statement = await db.prepare(
      'INSERT INTO person (name, email, password) values (?, ?, ?)',
    )
    const result = await statement.run(req.body.name, req.body.email, hashed)
    await result.stmt.finalize()

    const person = await db.all('select * from person')
    res.json({ person })
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}

export default signup
