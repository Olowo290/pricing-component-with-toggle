const label = document.querySelector('label');
const ann = document.querySelectorAll('.ann');

const togglePriceAndCheck = () => {
  label.classList.toggle('checked');
  ann.forEach(an => {
    an.classList.toggle('hide');
  });
};

label.addEventListener('click', togglePriceAndCheck);
