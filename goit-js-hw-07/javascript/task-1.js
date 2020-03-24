const task = document.querySelectorAll('li.item');

task.forEach(li => {
  const title = li.querySelector('h2');
  const taskLi = li.querySelectorAll('li');
  console.log(`Категория ${title.textContent}, Количество элементов ${taskLi.length}`)
});

