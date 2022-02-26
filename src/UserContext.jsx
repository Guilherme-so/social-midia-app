import React from 'react'
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const navigate = useNavigate()

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new error('token inválido')
          await getUSer(token)
        } catch (err) {
          userLogOut()
        } finally {
          setLoading(false)
        }
      }else{
        setLogin(false)
      }
    }
    autoLogin()
  }, [])

  const getUSer = async (token) => {
    const { url, options } = GET_USER(token)
    const response = await fetch(url, options)
    const data = await response.json()
    setData(data)
    setLogin(true)
  }

  const useLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const response = await fetch(url, options)
      if (!response.ok) throw new Error(`Error: usuário invalido`)
      const { token } = await response.json()
      window.localStorage.setItem('token', token)
      await getUSer(token)
      navigate('/conta')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const userLogOut = async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <UserContext.Provider
      value={{ useLogin, userLogOut, data, error, login, loading }}
    >
      {children}
    </UserContext.Provider>
  )
}
