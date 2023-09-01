/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { Dados } from "./dados"

export const ContaComponent = () => {
  const [input, setInput] = useState('password')
  
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col items-center ">
        <h1 className="text-[2rem] font-semibold mt-5">Criar Conta</h1>
        <section className="grid grid-cols-2 gap-x-10 gap-y-6 mt-10">

          <Dados  string={'E-mail'} type={'text'} placeholder={'Insira seu E-mail'}  />

          <Dados  string={'Senha'} type={input} placeholder={'Insira sua senha'} />
        <h1 onClick={() => input === 'password' ? setInput('type') : setInput('password')}>mudar</h1>

          <div className="flex flex-row gap-2 items-center">
            
            <input type="checkbox" name="ok" id="ok" />
            <label htmlFor="ok">
              <h2>Li e aceito os termos.</h2>
            </label>
          </div>
        </section>
          <button className="w-[250px] h-12 mt-6 border-blue-900 rounded-md hover:bg-black hover:text-white border-2 ">Finalizar
          </button>

      </div>
    </div>
  )
}