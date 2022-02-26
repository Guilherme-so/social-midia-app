import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs width='28' height='22' />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer
