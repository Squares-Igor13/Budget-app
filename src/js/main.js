let btnStart = document.getElementById('start')

// правые блоки программы
let budgetValue = document.querySelector('.budget-value')
	daybudgetValue = document.querySelector('.daybudget-value')
	levelValue = document.querySelector('.level-value')
	expensesValue = document.querySelector('.expenses-value')
	optionalexpensesValue = document.querySelector('.optionalexpenses-value')
	incomeValue = document.querySelector('income-value')
	monthsavingsValue = document.querySelector('.monthsavings-value')
	yearsavingsValue = document.querySelector('.yearsavings-value')

// поля с обязательными расходами
let expensesItem = document.getElementsByClassName('expenses-item')

// кнопки "Утвердить" и "Рассчитать"
let button = document.getElementsByTagName('button')

// поля необязательных расходов
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item')

// Статьи возможного дохода
let chooseIncome = document.querySelector('#income')

// чекбокс
let checkbox = document.querySelector('#savings')

// сумма
let sum = document.querySelector('#sum')

// процент
let percent = document.querySelector('#percent')

// Дата
let year = document.querySelector('.year-value')
	month = document.querySelector('.month-value')
	day = document.querySelector('.day-value')

