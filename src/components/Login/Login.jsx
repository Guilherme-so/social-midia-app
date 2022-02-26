import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import NotFound from '../NotFound'
import Head from '../Helper/Head'

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to='/conta' />
  return (
    <section className={styles.login}>
      <Head title='Login' />
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='cadastrar' element={<LoginCreate />} />
          <Route path='/login/perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
