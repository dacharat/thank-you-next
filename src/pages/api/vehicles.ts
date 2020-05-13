import { NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite'

const getAllVehicles = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await sqlite.open('./mydb.sqlite')
    const vehicles = await db.all('select * from vehicle')

    res.json({ vehicles })
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getAllVehicles
