const countProps = function(obj) {
  const entries = Object.entries(obj);
  const length = entries.length;
  return length;
}

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));