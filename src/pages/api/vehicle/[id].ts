import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../../utils/database'

const getVehicle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await connectDB()
    const vehicle = await db.get('select * from vehicle where id = ?', [
      req.query.id,
    ])
    res.json({ vehicle })
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getVehicle
