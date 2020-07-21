// BUDGET CONTROLLER
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach((cur, i) => {
      sum += cur.value;
    });
		data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1 // non existant value
  };

  return {
    addItem: function (type, desc, val) {
      var newItem, ID;

      // create new id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, desc, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, desc, val);
      }

      // push it into data structure
      data.allItems[type].push(newItem);

      // return the new element
      return newItem;
    },

    calculateBudget: function() {
      // calc total income and expenses
			calculateTotal('exp');
      calculateTotal('inc');

      // calc the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calc the % of income we spent
      data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
    },

    getBudget: function() {

    },

    testing: function () {
      console.log(data);
    },
  };
})();

// UI CONTROLLER
var UIController = (function () {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
      };
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;
      // create HTML sting w placeholder text
      if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }
      // replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      // insert the HTML into DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
      budgetController.testing();
    },

    clearFields: function() {
      var fields, fieldsArr;
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current) {
        current.value = '';
      });

      fieldsArr[0].focus();
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    let addBtn = document.querySelector(DOM.inputButton);
    addBtn.addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var updateBudget = function() {
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();
    // 2. Return budget

    // 3. Display the budget on the UI
  };

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. get the input data
    input = UIController.getInput();

    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      // 3. Add the item to the UI and clear fields
      UICtrl.addListItem(newItem, input.type);
      // 4. Clear the input fields for next entry
      UICtrl.clearFields();
    }
  };

  return {
    init: function () {
      console.log('app started');
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
