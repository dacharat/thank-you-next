import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite'

const getVehicle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await sqlite.open('./mydb.sqlite')
    const vehicle = await db.get('select * from vehicle where id = ?', [
      req.query.id,
    ])
    res.json({ vehicle })
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getVehicle
