(function () {
  const modal = document.querySelector('.modal-overlay');

  if (modal) {
    const trigger = document.querySelector('[data-open-modal]');
    const close = document.querySelector('.modal-close-button');

    trigger.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal() {
      modal.classList.add('is-open');
    }

    function closeModal(event) {
      let modalWindow = document.querySelector('.modal');
      if (event.target !== modalWindow || event.target !== close) {
        modal.classList.remove('is-open');
      }
    }
  }
})();

// let stars = document.querySelectorAll('span');
// console.log(stars);
//
// stars.forEach(stars, index) function() {
//
// });
//
// function setup(event) {
//   if (event.target.matches('span')) {
//     event.preventDefault();
//     var target = event.target;
//
//     // find selected star
//     var selected = target.indexOf();
//
//     var stars = document.querySelectorAll('.star');
//
//     for (var i = 0; i < stars.length; i++) {
//       // loop thru all elements
//       if (i < selected) {
//         stars[i].classList.add('selected');
//         stars[i].querySelector('.screen-reader').textContent += ' Selected';
//         console.log(stars[i].querySelector('.screen-reader').textContent);
//       } else {
//         stars[i].classList.remove('selected');
//         stars[i].querySelector('.screen-reader').textContent = i + 1 + ' Star';
//         if (i > 0) {
//           stars[i].querySelector('.screen-reader').textContent += 's';
//         }
//         console.log(stars[i].querySelector('.screen-reader').textContent);
//       }
//     }
//   }
// }
//
// // Example case.
// document.body.innerHTML = `
// <div id='rating'>
//   <span>*</span>
//   <span>*</span>
//   <span>*</span>
//   <span>*</span>
//   <span>*</span>
// </div>`;
//
// setup();
//
// document.getElementsByTagName('span')[2].click();
// console.log(document.body.innerHTML);
