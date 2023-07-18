const modal = document.querySelector('.modal-wrapper');
const interestLink = document.querySelector('.interest-link');
const modalCloseButton = document.querySelector('.modal-close-button');

interestLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});
