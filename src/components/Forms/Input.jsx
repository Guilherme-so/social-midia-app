import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, type, name, value, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <p className={styles.error}>Error</p>
    </div>
  )
}

export default Input
