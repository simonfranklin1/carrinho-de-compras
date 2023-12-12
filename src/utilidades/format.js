export const formatCurrency = (valor, moeda) => {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: moeda 
      })
}

export const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = () => {
  const array = JSON.parse(localStorage.getItem('cart'));

  return array;
<<<<<<< HEAD
}
=======
}
>>>>>>> 50d1a6b1b96eb1cbb163d978b1eb050a798fd7a1
