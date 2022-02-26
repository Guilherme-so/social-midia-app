import React from 'react'

const useMatch = (midia) => {
  const [match, setMatch] = React.useState(null)

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(midia)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [midia])

  if (match === null) return null
  return match
}

export default useMatch
