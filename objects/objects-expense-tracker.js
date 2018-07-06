let myAccount = {
    name: 'Jerome Dennis',
    expenses: 0,
    income: 0
};

let addExpense = function(account,expense)
{
    account.expenses += expense;
};

let addIncome = function (account, income) {
    account.income += income;
};

let getAccountSummary = function(account)
{
    let totalSummary = (account.income - account.expenses);
    console.log(`Account for ${account.name} has $${totalSummary}. Total Income : $${account.income}, Total Expense : $${account.expenses}.`);
}

let resetAccount = function (account) {
    account.expenses = account.income = 0;
};

addIncome(myAccount,3000);
addExpense(myAccount, 10);
addExpense(myAccount, 54);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);
