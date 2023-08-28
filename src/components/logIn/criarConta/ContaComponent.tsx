import { useState } from "react"
import { Dados } from "./dados"
import { Link } from "react-router-dom"

export const ContaComponent = () => {
  const [input, setInput] = useState('password')
  const [input2, setInput2] = useState('password')

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col items-center ">
        <h1 className="text-[2rem] font-semibold mt-5">Criar Conta</h1>
        <section className="grid grid-cols-2 gap-x-10 gap-y-6 mt-10">

          <Dados string={'Nome'} type={'text'} placeholder={'Insira seu Nome'} />
          <Dados string={'Sobrenome'} type={'text'} placeholder={'Insira seu Sobrenome'} />
          <Dados string={'E-mail'} type={'text'} placeholder={'Insira seu E-mail'} />
          <Dados string={'Telefone'} type={'number'} placeholder={'Insira seu Telefone'} />
          <Dados string={'Senha'} type={input} placeholder={'Insira sua senha'} />
          <Dados string={'Confirme sua Senha'} type={input2} placeholder={'Insira sua senha'} /> <Dados string={'Cidade'} type={'text'} placeholder={'Insira sua Cidade'} />
          <Dados string={'CEP'} placeholder="Insira seu CEP" type={'number'} />
          {/* <h1 onClick={() => input === 'password' ? setInput('type') : setInput('password') }>AQUI</h1> */}
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" name="ok" id="ok" />
            <label htmlFor="ok">
              <h2>Li e aceito os termos.</h2>
            </label>
          </div>
        </section>
        <Link to={'/log'}>
          <button className="w-[250px] h-12 mt-6 border-blue-900 rounded-md hover:bg-black hover:text-white border-2 ">Finalizar
          </button>
        </Link>


      </div>
    </div>
  )
}