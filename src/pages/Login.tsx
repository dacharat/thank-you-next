import { useRef, useState } from 'react'

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<object>({})

  const handleLogin = async () => {
    const resp = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }),
    })
    const json = await resp.json()
    setMessage(json)
  }

  return (
    <>
      {JSON.stringify(message)}
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login
