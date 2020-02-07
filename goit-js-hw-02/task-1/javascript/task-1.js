let j = 0;
const logItems = function (arr) {
   for (let i = 0; i < arr.length; i += 1){
     j += 1;
     console.log(`${j} - ${arr[i]}`);
  }
}

console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));