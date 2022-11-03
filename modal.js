const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}

const input = document.querySelector('#inputTxt');
const btn = document.querySelector('#btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  result.innerHTML = "";

  let text = input.value;
  
  if(text == 'teste'){
    openModal();
    result.innerHTML = "";
  
  } else {
    result.innerHTML = `Não encontrei ${text} nesta lista.`;
  }

})

/* Desenvolver com switch

btn.addEventListener('click', () => {
  result.innerHTML = "";

  var text = 1;
  var nomes;
  
  switch(text){
    case 0:
      nomes == 2 
      openModal();
      break
    case 1:
      nomes == 4 
      openModal();
      break
    case 2:
      nomes == 5 
      openModal();
      break
    case 3:
      nomes == 6 
      openModal();
      break
    case 4:
      nomes == 1 
      openModal();
      break
    default:
      result.innerHTML = `Não encontrei ${text} nesta lista.`; 
  }
})
*/
