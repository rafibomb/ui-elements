// Add informative error message for user

(function () {
  const numIncrement = document.querySelector('.number-increment');

  if (numIncrement) {
    const input = document.querySelector('.input');
    let inputValue = document.querySelector('.input').value;
    const buttons = document.querySelectorAll('.button');

    function updateInput(e) {
      if (inputValue > 0 && e.target.classList.contains('decrement')) {
        inputValue--;
      }
      if (inputValue <= 9 && e.target.classList.contains('increment')) {
        inputValue++;
      }
      document.querySelector('.input').value = inputValue;
    }

    for (button of buttons) {
      button.addEventListener('click', updateInput);
    }

    input.addEventListener('change', updateInput);
  }
})();
