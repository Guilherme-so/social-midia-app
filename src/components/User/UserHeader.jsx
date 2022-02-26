import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [titulo, setTitulo] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta/estatisticas':
        setTitulo('Estatísticas')
        break
      case '/conta/postar':
        setTitulo('Postar Foto')
        break
      default:
        setTitulo('Minha Conta')
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className='title'>{titulo}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
