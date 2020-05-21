const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if(3 < login.length && 17 > login.length){
    return true
  } else {
    return false
  }
};

const isLoginUnique = function(allLogins, login) {
  return (allLogins.some( el => el === login))
};

const addLogin = function(allLogins, login) {
  const isValid = isLoginValid(login);
  if(isValid){

    const isUnique = isLoginUnique(allLogins, login)
    if(isUnique){
      return('Такой логин уже используется!')
    } else {
      allLogins.push(login);
      return('Логин успешно добавлен!');
    }

  } else {
    return('Ошибка! Логин должен быть от 4 до 16 символов')
  }
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'