import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite'

const getVehiclesByPersonId = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === 'GET') {
    const db = await sqlite.open('./mydb.sqlite')
    const vehicles = await db.all('select * from vehicle where ownerId = ?', [
      req.query.id,
    ])
    res.json({ vehicles })
  }
  res.status(500).json({ message: 'sorry we only accept GET requests' })
}

export default getVehiclesByPersonId
