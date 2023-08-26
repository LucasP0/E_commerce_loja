import { KeyRound, Mail } from "lucide-react"
import { useState } from "react";

export const LogComponent = () => {
  const [input, setInput] = useState('password');
  const handleChange = () => {input === 'password' ? setInput('type') : setInput('password') }
  return (
    <div className="flex items-center justify-center">
      <div 
      className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col justify-center items-center gap-20">
        <section className="flex flex-col items-center gap-10 ">
          <h1 className="text-[2rem] font-semibold">Login</h1>
          <div className="flex flex-col items-start w-[300px] gap-2 ">
            <div className="flex flex-row gap-2 items-center">
              <Mail size={20} /> E-mail</div>
            <input
              type="e-mail"
              className="w-[300px] border-2 border-blue-800 rounded-md h-10 p-2 outline-none" placeholder="E-mail"
            />
            <div className="flex flex-row gap-2 items-center">
              <KeyRound size={20} />
              Senha
            </div>
            <div className="">
              <input
                type={input}
                className="w-[300px] border-2 border-blue-800 rounded-md h-10 p-2 outline-none" placeholder="Insira sua senha"
              />
              <h1 onClick={handleChange}>OK</h1>
            </div>
            <h2 className="text-right w-full text-blue-800 hover:text-gray-600">Esqueci a senha</h2>
            <h2 className="text-right w-full text-blue-800 hover:text-gray-600">Criar Conta</h2>
          </div>
        </section>

      </div>
    </div>
  )
}