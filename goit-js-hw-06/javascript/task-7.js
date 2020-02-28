import users from './users.js'

const calculateTotalBalance = users => users
  .reduce((acc, userBalance) => acc + userBalance.balance, 0);

console.log(calculateTotalBalance(users));