
var target_amount = 99;
var denominations = [1, 5, 10];
var result = 0;
var denominations_count = [];
var total_coins = getChange(target_amount, denominations);
console.log(total_coins, denominations_count)



function getChange(target_amount, denominations) {
    if(target_amount == 0) {
        return 0;
    }
    var maxNumber = findMaxNumber(target_amount, denominations);
    var quotient = Math.floor(target_amount/maxNumber);
    denominations_count.push(`${quotient}x${maxNumber}`)
    result = (parseInt(result)+parseInt(quotient));
    var remainder = target_amount % maxNumber;
    if(remainder>0) {
        getChange(remainder, denominations)
    }
    return result;
}

function findMaxNumber(target_amount, denominations) {
  let denominationsCopy = denominations;
  var maxNumber = Math.max.apply(Math, denominationsCopy);
  if (maxNumber > target_amount) {
    const index = denominationsCopy.indexOf(maxNumber);
    if (index > -1) {
      denominationsCopy.splice(index, 1);
    }
    return findMaxNumber(target_amount, denominationsCopy);
  } else {
    return maxNumber;
  }
}
