let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '100');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {

    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?",'');
        
        if (typeof(a) === 'string' && typeof(b) != null && typeof(a) != null &&
        b != '' && a != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i <= 2; i++) {
        let a = prompt("Введите необязательную статью расходов в этом месяце", '');     
        appData.optionalExpenses[i + 1] = a;
    }
}

chooseOptExpenses();

function detectedDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ваш бюджет на 1 день " + appData.moneyPerDay);
}

detectedDayBudget();

function detectedLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

detectedLevel();

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой прцоент?');
        
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();