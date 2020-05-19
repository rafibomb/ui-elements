(function () {
  const textFancy = document.querySelector('.text-fancy');

  if (textFancy) {
    const strText = textFancy.textContent;
    const splitText = strText.split('');
    textFancy.textContent = '';

    console.log(splitText.lenght);
    splitText.forEach((letter) => {
      textFancy.innerHTML += `<span>${letter}</span>`;
    });

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      let span = textFancy.querySelectorAll('span')[char];
      span.classList.add('fade');
      char++;

      // end the interval when no charachters left
      if (char === 14) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
      timer = null;
    }
  }
})();
