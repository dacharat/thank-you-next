import { useRef, useState } from 'react'

const Signup = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<object>({})

  const handleLogin = async () => {
    const resp = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }),
    })
    const json = await resp.json()
    setMessage(json)
  }

  return (
    <>
      <h1>Create a new user</h1>
      {JSON.stringify(message)}
      <div>
        <input type="text" placeholder="name" ref={nameRef} />
        <input type="text" placeholder="email" ref={emailRef} />
        <input type="password" placeholder="password" ref={passwordRef} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Signup
