import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '../../../../utils/database'

const getVehiclesByPersonId = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === 'GET') {
    const db = await connectDB()
    const vehicles = await db.all('select * from vehicle where ownerId = ?', [
      req.query.id,
    ])
    res.json({ vehicles })
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default getVehiclesByPersonId
