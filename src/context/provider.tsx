import { useEffect, useState } from "react";
import { AppContext } from "./AppContext"

export const Provider = ({ children }) => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_db");
    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser[0])
    }
  }, [])

  const Signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"))
    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "E-mail ou senha incorretos";
      } 
    }
  };

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail"
    }
    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password}];
    } else {
      newUser = [{ email, password }]
    }

    localStorage.setItem("users_db", JSON.stringify(newUser))

    return;
  }
  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token")
  }

  const value = {
    email,
    setEmail,
    signout,
    signup,
    Signin,
    user,

  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
} 