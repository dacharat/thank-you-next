import { NextApiRequest, NextApiResponse } from 'next'
import { authenticated } from '../../utils/authenticate'
import { connectDB } from '../../utils/database'

const getAllVehicles = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const db = await connectDB()
    const vehicles = await db.all('select * from vehicle')

    res.json({ vehicles })
  } else {
    res.status(500).json({ message: 'sorry we only accept GET requests' })
  }
}

export default authenticated(getAllVehicles)
