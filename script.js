const h1Element = document.querySelector('h1');
const inputField = document.createElement('input');
inputField.type = 'number';
inputField.placeholder = 'Inserisci qui il tuo numero';

document.body.appendChild(inputField);

inputField.addEventListener('input', (e) => {
  const numero = parseInt(e.target.value);
  if (numero % 7 === 0) {
    h1Element.textContent = 'Il tuo numero è divisibile per sette';
  } else if (numero % 7 !== 0 && !isNaN(numero)) {
    h1Element.textContent = 'Il tuo numero non è divisibile per sette';
  } else {
    h1Element.textContent = 'Inserisci un numero';
  }
});
