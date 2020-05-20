(function () {
  const toggle = document.querySelector('.password-visibility-button');

  if (toggle) {
    const password = document.querySelector('#password');

    toggle.addEventListener('click', showHide);

    function showHide() {
      if (password.type === 'password') {
        password.setAttribute('type', 'text');
        toggle.classList.add('is-shown');
        toggle.classList.remove('is-masked');
      } else {
        password.setAttribute('type', 'password');
        toggle.classList.add('is-masked');
        toggle.classList.remove('is-shown');
      }
    }
  }
})();
