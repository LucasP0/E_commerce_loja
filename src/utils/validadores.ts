const validarEmail = (email: boolean) => {
  return email?.toString().includes('@') && email?.toString().includes('.');
} 

const validarSenha = (senha: boolean) => {
  return senha?.toString().length > 6
}

export {
  validarEmail,
  validarSenha,
}