import users from './users.js'

const getUsersWithFriend = (users, friendName) => users
  .filter(user => user.friends.includes(friendName))
  .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));