import { KeyRound, Mail } from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom";


export const LogComponent = () => {
 
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col justify-center items-center gap-20">
        <section className="flex flex-col items-center  gap-12 ">
          <h1 className="text-[2rem] font-semibold">Login</h1>
          <div className="flex flex-col items-center  w-[300px] gap-2 ">
            <div className="flex flex-row gap-2 items-center text-right w-full">
              <Mail size={20} /> E-mail</div>
            <input
              name="email"
              type="email"
              className="w-[300px] border-2 border-blue-800 rounded-md h-10 p-2 outline-none" placeholder="E-mail"
            />
            <div className="flex flex-row gap-2 items-center text-right w-full">
              <KeyRound size={20} />
              Senha
            </div>
            <div className="">
              <input
                name="password"
                type='password'
                className="w-[300px] border-2 border-blue-800 rounded-md h-10 p-2 outline-none" placeholder="Insira sua senha"

              />
            </div>
            <button
              type="submit"

              className={`w-[250px] h-12 mt-6 border-blue-900 rounded-md hover:bg-black hover:text-white border-2 `}>Entrar
            </button>
            <Link to={'/log/forgot'} className="w-full">
              <h2 className="text-right w-full text-blue-800 hover:text-gray-600 mt-2">Esqueci a senha</h2>
            </Link>
            <Link to={'/log/conta'} className="w-full">
              <h2 className="text-right w-full text-blue-800 hover:text-gray-600">Criar Conta</h2>
            </Link>

          </div>
        </section>
      </div>
    </div>
  )
}