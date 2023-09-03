/* eslint-disable @typescript-eslint/no-unsafe-return */
const formatCurrency = (value, currency) => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency,
  } 
  );
};

export default formatCurrency;