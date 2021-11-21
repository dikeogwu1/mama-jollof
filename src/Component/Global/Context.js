import React, { useContext, useState } from 'react'

const store = React.createContext()

const Context = ({ children }) => {
  const [search, setSearch] = useState('ab')

  return (
    <store.Provider value={{ search, setSearch }}>{children}</store.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(store)
}

export default Context
