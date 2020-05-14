import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite'
import { authenticated } from '../../utils/authenticate'

const getPeople = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await sqlite.open('./mydb.sqlite')
    const people = await db.all('select id, email, name from person')

    res.json({ people })
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default authenticated(getPeople)
