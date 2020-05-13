import { NextApiRequest, NextApiResponse } from 'next'

const getPersonById = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.json({ byId: req.query.id, method: req.method })
  }
  res.status(500).json({ message: 'sorry we only accept GET requests' })
}

export default getPersonById
