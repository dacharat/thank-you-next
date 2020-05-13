import { NextApiRequest, NextApiResponse } from 'next'

const getAllVehicles = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.json({ hello: 'world', method: req.method })
  }
  res.status(500).json({ message: 'sorry we only accept GET requests' })
}

export default getAllVehicles
