// Add informative error message for user

(function () {
  const numIncrement = document.querySelector('.number-increment');

  if (numIncrement) {
    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');
    const max = 10;
    const min = 0;

    function updateInput(e) {
      let inputValue = input.value;
      if (e.target.classList.contains('decrement')) {
        inputValue--;
      } else if (e.target.classList.contains('increment')) {
        inputValue++;
      }

      inputValue = Math.min(max, inputValue);
      input.value = Math.max(min, inputValue);
    }

    for (button of buttons) {
      button.addEventListener('click', updateInput);
    }

    input.addEventListener('change', updateInput);
  }
})();

// changes
// ----------------
// add varliable for the input
// add variables for min max
// move input into the update function so change happens from current value
// simplify conditionals
// compare max and min to inputValue
// add change event listener for direct input
