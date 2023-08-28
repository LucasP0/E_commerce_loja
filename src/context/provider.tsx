import { useState } from "react";
import { AppContext } from "./AppContext"

export const Provider = ({ children }) => {
  const [email, setEmail] = useState('');
  const value = {
    email,
    setEmail,
  }
  
  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  )
} 