export const Forgot = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col justify-center items-center gap-10 ">
        <h1 className="text-[2rem] font-semibold">Recuperação de senhas</h1>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="w-[300px] text-center">Digite seu E-mail Para entramos em contato para alterar a sua senha</h2>
          <input
            type="e-mail"
            className="w-[300px] border-2 border-blue-800 rounded-md h-10 p-2 outline-none" placeholder="E-mail"
          />
          <button className="w-[250px] h-12 mt-6 border-blue-900 rounded-md hover:bg-black hover:text-white border-2 ">Entrar
          </button>
        </div>
      </div>
    </div>
  )
}