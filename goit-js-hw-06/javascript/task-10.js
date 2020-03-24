import users from './users.js'

const getSortedUniqueSkills = users => users
  .reduce((acc, userSkill) => [...acc, ...userSkill.skills], [])
  .filter((element, index, user) => user.indexOf(element) === index)
  .sort((a, b) => a.localeCompare(b, 'en'));

console.log(getSortedUniqueSkills(users));