/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const Complited = () => {
  const {email}: any = useContext(AppContext)
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="bg-white w-[1000px] h-[650px] rounded-md flex flex-col justify-center items-center gap-10 ">

        <h1 className="text-[2rem] font-semibold">Recuperação de senhas</h1>
        <div className="flex flex-col gap-4 items-center">
          <h2 className="w-[300px] text-center">Um E-mail foi enviado para <strong>{email}</strong> para recuperação da sua conta</h2>
          <Link to={'/log'}>
            <button className="w-[250px] h-12 mt-6 border-blue-900 rounded-md hover:bg-black hover:text-white border-2 ">Retornar
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}