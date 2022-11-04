const modal = document.querySelector('.modal-container')
const modalBg = document.querySelector('.modal-bg');

export function openModal() {
  modal.classList.add('active');
  modalBg.classList.add('modal-bg-active');
}

const close = document.querySelector('.btnClose');

close.addEventListener('click', () => {
  modal.classList.remove('active');
  modalBg.classList.remove('modal-bg-active');
});


