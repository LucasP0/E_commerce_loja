/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AppContext } from "./AppContext"

export const Provider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const value: any = {
    email,
    setEmail,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    showMenu,
    setShowMenu
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
} 