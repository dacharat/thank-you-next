import { NextApiRequest, NextApiResponse } from 'next'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { secret } from '../../utils/authenticate'
import { serialize } from 'cookie'
import { connectDB } from '../../utils/database'

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectDB()

  if (req.method === 'POST') {
    const person = await db.get('select * from person where email = ?', [
      req.body.email,
    ])

    compare(req.body.password, person.password, (err, result) => {
      if (!err && result) {
        const claims = { sub: person.id, myPersonEmail: person.email }
        const jwt = sign(claims, secret, { expiresIn: '1h' })

        res.setHeader(
          'Set-Cookie',
          serialize('auth', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 3600,
            path: '/',
          }),
        )
        res.json({ message: 'Welcome back to the website!' })
      } else {
        res.json({ message: 'Oops, something went wrong!' })
      }
    })
  } else {
    res.status(405).json({ message: 'We only support POST' })
  }
}

export default login
