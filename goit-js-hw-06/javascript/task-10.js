import users from './users.js'

const getSortedUniqueSkills = users => users
  .reduce((acc, userSkill) => [...acc, ...userSkill.skills], [])
  .filter((element, index, user) => user.indexOf(element) === index)
  .sort((a, b) => a < b?-1:1);

console.log(getSortedUniqueSkills(users));