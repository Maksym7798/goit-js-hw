const checkForSpam = function (message){
  const checkMessage = message.toUpperCase();
  return checkMessage.includes('SALE') ||  checkMessage.includes('SPAM');
}

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));