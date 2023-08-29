import { useState } from "react"
import { Dados } from "./dados"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"

export const ContaComponent = () => {
  const [input, setInput] = useState('password')
  const [input2, setInput2] = useState('password')
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const[error, setError] = useState("");

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {


    const res = signup(email, senha);

    if(res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com Sucesso!");
    navigate("/log")
  };


  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col items-center ">
        <h1 className="text-[2rem] font-semibold mt-5">Criar Conta</h1>
        <section className="grid grid-cols-2 gap-x-10 gap-y-6 mt-10">

          <Dados onChange={(e) => [setEmail(e.target.value), setError("")]} string={'E-mail'} type={'text'} placeholder={'Insira seu E-mail'}  />

          <Dados onChange={(e) => [setSenha(e.target.value), setError("")]} string={'Senha'} type={input} placeholder={'Insira sua senha'} />



          {error}
          <div className="flex flex-row gap-2 items-center">
            
            <input type="checkbox" name="ok" id="ok" />
            <label htmlFor="ok">
              <h2>Li e aceito os termos.</h2>
            </label>
          </div>
        </section>
          <button onClick={handleSignup} className="w-[250px] h-12 mt-6 border-blue-900 rounded-md hover:bg-black hover:text-white border-2 ">Finalizar
          </button>

      </div>
    </div>
  )
}