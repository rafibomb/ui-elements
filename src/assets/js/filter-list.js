(function () {
  const filterInput = document.getElementById('filterInput');

  if (filterInput) {
    filterInput.addEventListener('keyup', filterNames);

    function filterNames() {
      // get value of input
      let filterValue = filterInput.value.toUpperCase();

      // get names ul
      const namesList = document.getElementById('names');
      // get
      const listItems = namesList.querySelectorAll('li.list-item');

      // loop through list items

      for (let i = 0; i < listItems.length; i++) {
        let a = listItems[i].getElementsByTagName('a')[0];
        // if matches
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
          listItems[i].style.display = '';
        } else {
          listItems[i].style.display = 'none';
        }
      }
    }
  }
})();
