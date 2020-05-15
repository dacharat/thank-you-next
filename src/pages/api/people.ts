import { NextApiRequest, NextApiResponse } from 'next'
import { authenticated } from '../../utils/authenticate'
import { connectDB } from '../../utils/database'

const getPeople = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await connectDB()
    const people = await db.all('select id, email, name from person')

    res.json({ people })
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default authenticated(getPeople)
