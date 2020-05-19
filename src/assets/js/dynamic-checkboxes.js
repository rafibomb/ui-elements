// TODO:
// if checkAll checked and one removed, uncheck checkAll

(function () {
  const checkBoxUI = document.querySelector('.dynamic-checkbox-group');

  if (checkBoxUI) {
    const DynamicCheckboxes = {
      checkboxes: document.querySelectorAll(
        '.dynamic-checkbox-table td input[type="checkbox"]'
      ),
      selectAllTarget: document.getElementById('jsSelectAll'),
      clearButton: document.getElementById('jsClear'),

      init() {
        this.shiftToSelect();
        this.selectAll();
        this.clearChecked();
        this.showRemoveCheckedButton();
      },

      shiftToSelect() {
        const checkboxes = this.checkboxes;
        let lastChecked;

        function handleCheck(event) {
          // check if shift key is down && check if checkbox is lastChecked

          let inBetween = false;
          if (event.shiftKey && this.checked) {
            checkboxes.forEach((checkbox) => {
              if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
              }

              if (inBetween) {
                checkbox.checked = true;
              }
            });
          }
          lastChecked = this;
        }

        checkboxes.forEach((checkbox) =>
          checkbox.addEventListener('click', handleCheck)
        );
      },

      selectAll() {
        function handleSelectAll() {
          this.checkboxes.forEach((checkbox) => {
            checkbox.checked = this.selectAllTarget.checked;
          });
        }

        this.selectAllTarget.addEventListener(
          'click',
          handleSelectAll.bind(this),
          false
        );
      },

      showRemoveCheckedButton() {
        this.clearButtonDisplay('none');
        document.addEventListener('change', this.showButton.bind(this));
      },

      showButton() {
        const checkboxesChecked = document.querySelectorAll(
          '.dynamic-checkbox-table td input[type="checkbox"]:checked'
        ).length;

        if (checkboxesChecked > 0) {
          this.clearButton.querySelector(
            'span'
          ).textContent = checkboxesChecked;
          this.clearButtonDisplay('inline-block');
        } else {
          this.clearButton.querySelector('span').textContent = '';
          this.clearButtonDisplay('none');
        }
      },

      clearButtonDisplay(state) {
        this.clearButton.style.display = state;
      },

      clearChecked() {
        this.clearButton.addEventListener(
          'click',
          removeChecked.bind(this),
          false
        );

        function removeChecked() {
          this.checkboxes.forEach((checkbox) => (checkbox.checked = false));
          this.selectAllTarget.checked = false;
          this.clearButtonDisplay('none');
        }
      },
    };

    DynamicCheckboxes.init();
  }
})();
