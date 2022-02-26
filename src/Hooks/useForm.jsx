import React from 'react'

const validacao = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter pelo menos 1 caracter Maíusculo, 1 Caracter Minusculo e 1 digito, Com no minimo 8 caracters',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números',
  },
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  const validate = (value) => {
    if (type === false) return true
    if (value.length === 0) {
      setError('preencha um valor')
      return false
    } else if (validacao[type] && !validacao[type].regex.test(value)) {
      setError(validacao[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  const handleChange = ({ target }) => {
    if (error) {
      validate(target.value)
    }
    setValue(target.value)
  }
  return {
    value,
    setValue,
    error,
    handleChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
