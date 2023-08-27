import { useState } from "react"
import { Dados } from "./dados"

export const ContaComponent = () => {
  const [ input, setInput] = useState('password')
  const [ input2, setInput2] = useState('password')
  const [senha, setSenha] = useState('');
  const [res, setRes] = useState('');
  const HandleCheque = () => {
    console.log(senha)
  }
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col items-center ">
        <h1 className="text-[2rem] font-semibold">Criar Conta</h1>
        <section className="grid grid-cols-2 gap-10">
        <Dados string={'Nome'} type={'text'} placeholder={'Insira seu Nome'}/>
        <Dados string={'Sobrenome'} type={'text'} placeholder={'Insira seu Sobrenome'}/>
        <Dados string={'E-mail'} type={'text'} placeholder={'Insira seu E-mail'}/>
        <Dados string={'Telefone'} type={'text'} placeholder={'Insira seu Telefone'}/>


        <Dados onChange={(e) =>setSenha(e.target.value)}  string={'Senha'} type={input} placeholder={'Insira sua senha'}/>
        <Dados id="#input2"  string={'Confirme sua Senha'} type={input2} placeholder={'Insira sua senha'}/>
        
        <h1 onClick={() => input === 'password'? setInput('text'): setInput('password')}>MUDAR</h1>
        <h2 className="bg-black" onClick={HandleCheque}>AQI</h2>
        <h1 className="text-black">A{res}{senha}</h1>
        </section>
        
      </div>
    </div>
  )
}