(function () {
  const accordion = document.querySelector('[data-accordion]');

  if (accordion) {
    const accordionItems = document.querySelectorAll('[data-accordion-item]');
    const accordionContentPanes = document.querySelectorAll(
      '[data-accordion-content]'
    );

    // hide each all non active accordion
    accordionItems.forEach(function (accordion) {
      // clicked accordions clickable target
      const accordionTitle = accordion.firstElementChild;
      accordionTitle.addEventListener('click', toggleAccordion);
    });

    function toggleAccordion(event) {
      event.preventDefault();
      accordionContentPanes.forEach(function (content) {
        // check if clicked row matches
        if (content.previousElementSibling === event.target) {
          content.classList.add('is-active');
          content.parentElement.classList.add('is-active');
          content.style.maxHeight = content.scrollHeight + 'px';
          console.log(allowAllClosed);
        } else {
          // close all not clicked accordion items
          content.classList.remove('is-active');
          content.parentElement.classList.remove('is-active');
          content.style.maxHeight = '0';
        }
      });
    }

    function init() {
      accordionContentPanes.forEach(function (content) {
        if (content.classList.contains('is-active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }

    function setOptions() {
      // check options for true
      const allowAllClosed = accordion.hasAttribute('data-allow-all-closed');
      const allowMultiOpen = accordion.hasAttribute('data-allow-multiple-open');
    }

    init();
  }
})();

// (function () {
//   const accordion = document.querySelector('[data-accordion]');
//
//   if (accordion) {
//     const accordionItems = document.querySelectorAll('[data-accordion-item]');
//     const accordionContentPanes = document.querySelectorAll(
//       '[data-accordion-content]'
//     );
//
//     // hide each all non active accordion
//     accordionItems.forEach(function (accordion) {
//       // clicked accordions clickable target
//       const accordionTitle = accordion.firstElementChild;
//       accordionTitle.addEventListener('click', toggleAccordion);
//     });
//
//     function toggleAccordion(event) {
//       event.preventDefault();
//       accordionContentPanes.forEach(function (content) {
//         // check if clicked row matches
//         if (content.previousElementSibling === event.target) {
//           content.classList.add('is-active');
//           content.parentElement.classList.add('is-active');
//           content.style.maxHeight = content.scrollHeight + 'px';
//         } else {
//           // close all not clicked accordion items
//           content.classList.remove('is-active');
//           content.parentElement.classList.remove('is-active');
//           content.style.maxHeight = '0';
//         }
//       });
//     }
//   }
// })();
