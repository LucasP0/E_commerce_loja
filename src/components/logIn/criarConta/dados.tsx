interface IDados {
  string: string;
  type: string;
  placeholder: string;
}

export const Dados = ({string, type, placeholder}: IDados) => {
  return (
    <div className="flex flex-col items-start">
      <h2>{string}</h2>
      <input
        type={type}
        className="w-[300px] border-2 border-blue-800 rounded-md h-10 p-2 outline-none" placeholder={placeholder}
      />
    </div>
  )
}