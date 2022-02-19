import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginForm = () => {
  const usename = useForm()
  const password = useForm()
  console.log(password.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((json) => {
        console.log(json)
        return json
      })
  }

  return (
    <section>
      <h1>Login</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...usename} />
        <Input label='Senha' type='password' name='password' {...password} />
        <Button disabled>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm
