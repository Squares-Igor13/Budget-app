let btnStart = document.getElementById('start')

// правые блоки программы
let budgetValue = document.querySelector('.budget-value')
	daybudgetValue = document.querySelector('.daybudget-value')
	levelValue = document.querySelector('.level-value')
	expensesValue = document.querySelector('.expenses-value')
	optionalexpensesValue = document.querySelector('.optionalexpenses-value')
	incomeValue = document.querySelector('.income-value')
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


//Нажимаем на кнопку Старт
btnStart.addEventListener('click', start)
let money, time
function start() {
	time = prompt('Введите дату в формате YYYY-MM-DD')
	money = +prompt('Ваш бюджет на месяц')
	
	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц')
	}
	appData.budget = money
	appData.timeData = time
	budgetValue.textContent = Math.round(money)

	
	year.value = new Date(time).getFullYear()
	month.value = addZero(new Date(time).getMonth() + 1)
	day.value = addZero(new Date(time).getDate())
}

function addZero(num) {
	if(num < 10) {
		return '0' + num
	} else {
		return num
	}
}

//Утвердить обязательные расходы
button[1].addEventListener('click', function() {
	let sum = 0

		for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value
                b = expensesItem[++i].value
            if ( (typeof(a))==='string' && (typeof(a)) != null && 
                 (typeof(b)) != null && a != '' && b != '' && 
                  a.length <= 20) {
                appData.expenses[a] = b
            sum += +b
            } else {
                i--
            }
            
        }
    expensesValue.textContent = sum
})

//Утвердить Необязательные расходы
button[2].addEventListener('click', function() {
		let total = 0
		for(let i = 0; i < (optionalexpensesItem.length / 2); i++) {
            let a = optionalexpensesItem[i].value
            	b = +optionalexpensesItem[ 3 + i ].value
            
            total += b
            appData.optionalExpenses[a] = b
        }
        optionalexpensesValue.textContent = total
})




//Рассчитать бюджет на день
button[3].addEventListener('click', function() {

	//если начали программу и в переменной лежит 
	//число, тогда запуститься кнопка дневнойго бюджета
	if(appData.budget) {
		appData.moneyPerDay = ( (appData.budget - 
								 expensesValue.textContent - 
								 optionalexpensesValue.textContent + 
								 +incomeValue.textContent) / 30).toFixed()
		daybudgetValue.textContent = appData.moneyPerDay

			if (appData.moneyPerDay < 100) {
	            levelValue.textContent = 'Минимальный уровень'
	        } else if(appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
	            levelValue.textContent = 'Средний уровень'
	        } else if (appData.moneyPerDay >= 2000) {
	            levelValue.textContent = 'Высокий уровень'
	        } else {
	            levelValue.textContent = 'Произошла ошибка'
	        }
	} else {
		daybudgetValue.textContent = 'Некорректное значение'
		levelValue.textContent = 'Произошла ошибка'
	}
})


//подсчет возможных доходов
chooseIncome.addEventListener('blur', function() {
	let items = chooseIncome.value
	appData.income = items.split(', ')

	let total = 0
	for(let i = 0; i < appData.income.length; i++) {
		total += +appData.income[i].split('=')[1]
	}
	incomeValue.textContent = total
})

//чекбокс накоплений
checkbox.addEventListener('click', function() {
	if(appData.savings == true) {
		appData.savings = false
	} else {
		appData.savings = true
	}
})

//инпут суммы
sum.addEventListener('input', function() {
	if(appData.savings) {
		let sumValue = +sum.value
			percentValue = +percent.value

		appData.monthIncome = (sumValue/100/12*percentValue).toFixed(2);
		appData.yearIncome = (sumValue/100*percentValue).toFixed(2);
		
		monthsavingsValue.textContent = appData.monthIncome
		yearsavingsValue.textContent = appData.yearIncome

	}
})

//инпут процентов
percent.addEventListener('input', function() {
	if(appData.savings) {
		let sumValue = +sum.value
			percentValue = +percent.value

		appData.monthIncome = (sumValue/100/12*percentValue).toFixed(2);
		appData.yearIncome = (sumValue/100*percentValue).toFixed(2);
		
		monthsavingsValue.textContent = appData.monthIncome
		yearsavingsValue.textContent = appData.yearIncome
	}
})

//неактивные кпопки
button[3].disabled = true
button[1].disabled = true
button[2].disabled = true

//активируем кнопки
btnStart.addEventListener('click', function() {
	for(let i = 1; i < 4; i++) {
		button[i].disabled = false
		button[i].style.backgroundColor = '#FFA033'
	}
})


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
}






