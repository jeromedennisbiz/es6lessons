let myAccount =
{
    name: 'Jerome Dennis',
    expenses:0,
    incomes:0,
};

let addExpense = function(account,expense)
{
    account.expenses += expense;
    console.log(account);
};

console.log(myAccount);
addExpense(myAccount,1500);
console.log(myAccount);