import users from './users.js'

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));