// Multiple Arguments

let add = function(a,b,c)
{
    return a + b + c;
};

console.log("SUM : "+add(1, 2, 3));

// Default Arguments

let printScoreText = function(name='Player',score=0)
{
    console.log(`${name}` + " : " + `${score}`);
};

printScoreText('Jerome',85);
printScoreText(null, 85);
printScoreText(undefined, 85);

// Tip Calculator
// calculate Tip amount based on the Total Bill amount and Tip percent (default 0.1)

let printTipAmount = function(totalBillAmount, tipPercent = 0.1)
{
    console.log('Total Tip Amount : %f ', `${totalBillAmount}` * `${tipPercent}`);
};

printTipAmount(1000);
printTipAmount(2000,0.05);
printTipAmount(14.65);