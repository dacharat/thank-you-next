import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite'

const getPeople = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await sqlite.open('./mydb.sqlite')
    const people = await db.all('select * from person')

    res.json({ people })
  }
  res.status(500).json({ message: 'sorry we only accept GET requests' })
}

export default getPeople
