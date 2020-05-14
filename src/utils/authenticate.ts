import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'

export const secret = '0e900be1-0ac5-4e6a-bf4b-38f8b21a189b'

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  return new Promise((resolve, reject) => {
    verify(req.cookies.auth!, secret, async (err, decoded) => {
      if (!err && decoded) {
        await fn(req, res)
        return resolve()
      }
      res.status(401).send({ message: 'Sorry you are not authenticated' })
      return reject()
    })
  })
}
