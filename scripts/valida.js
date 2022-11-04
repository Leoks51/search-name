import { assinantes } from "./assinantes.js";
import { openModal } from "./modal.js";

const input = document.querySelector('#inputTxt');
const btn = document.querySelector('#btn');
const result = document.querySelector('.result');
const spanTxt = document.querySelector('.result-modal');

btn.addEventListener('click', () => {
  result.innerHTML = "";

  var encontrarAssinante = assinantes.find((selecionado) => {
    if(selecionado.inscricao == input.value){
        var sorteado = selecionado.nome;
    }
    console.log(encontrarAssinante);
    if(sorteado){
        openModal();
        result.innerHTML = "";  /*retorno de resultado esperado \/ */
        spanTxt.innerHTML = `${sorteado} você foi sorteado!`
    } else {     /*retorno de resultado inesperado \/ */
        result.innerHTML = `Não encontrei ${input.value} nesta lista.`;
    };
      
    return sorteado;
  });
});