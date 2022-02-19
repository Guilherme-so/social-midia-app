import React from 'react'

const useForm = () => {
  const [value, setValue] = React.useState('')

  const handleChange = ({ target }) => {
    setValue(target.value)
  }
  return {
    value,
    setValue,
    handleChange,
  }
}

export default useForm
