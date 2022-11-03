const modal = document.querySelector('.modal-container')
const modalBg = document.querySelector('.modal-bg');

function openModal() {
  modal.classList.add('active');
  /*para tirar eventos de mouse atrás do modal enquanto tiver ativo*/
  modalBg.classList.add('modal-bg-active');/*verificar no CSS funcionamento*/
}

function closeModal() {
  modal.classList.remove('active');
  modalBg.classList.remove('modal-bg-active');
}

const input = document.querySelector('#inputTxt');
const btn = document.querySelector('#btn');
const result = document.querySelector('.result');
const spanTxt = document.querySelector('.result-modal');

btn.addEventListener('click', () => {
  result.innerHTML = "";

  let text = input.value;
  
  if(text == 'teste'){
    openModal();
    result.innerHTML = "";  /*retorno de resultado esperado \/ */
    spanTxt.innerHTML = `O nome: <strong>${text.toUpperCase()}</strong> foi sorteado!`
  } else {     /*retorno de resultado inesperado \/ */
    result.innerHTML = `Não encontrei ${text} nesta lista.`;
  };
});