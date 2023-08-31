/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AppContext } from "./AppContext"

export const Provider = ({ children }: any) => {
  const [email, setEmail] = useState('');

  const value: any = {
    email,
    setEmail,
    
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
} 