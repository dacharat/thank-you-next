import { NextApiRequest, NextApiResponse } from 'next'

const getPeople = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.json({ names: [{ name: 'jack' }, { name: 'dacharat' }] })
  }
  res.status(500).json({ message: 'sorry we only accept GET requests' })
}

export default getPeople
