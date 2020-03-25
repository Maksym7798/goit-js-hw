const categories = document.querySelector('#categories');

const str = [...categories.children]
.map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
.join('\n');
console.log(str);


