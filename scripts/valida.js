import { assinantes } from "./assinantes.js";
import { openModal } from "./modal.js";

const input = document.querySelector('#inputTxt');
const btn = document.querySelector('#btn');
const spanTxt = document.querySelector('.result-modal');

btn.addEventListener('click', () => {
  
  var encontrarAssinante = assinantes.find((selecionado) => {
    if(selecionado.inscricao == input.value){
      var sorteado = selecionado.nome;
    }

    var modalTitle = document.querySelector('.modal-title');

    if(sorteado){
        openModal();
        spanTxt.innerHTML = `O número <strong>${input.value}</strong> pertencente a <strong>${sorteado}</strong>, foi sorteado, parabéns!`
        modalTitle.innerHTML = 'WOW!';
    } else { 
        openModal();
        spanTxt.innerHTML = `Poxa, o número <strong>${input.value}</strong> não foi sorteado.`;
        modalTitle.innerHTML = 'OOPS!';
    };
      
    return sorteado;
  });
});