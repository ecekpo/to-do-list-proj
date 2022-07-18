export const clearTask = (e) => {
  const clicked = e.target.closest('.checkbox');
  if (!clicked) return;
  const targetData = parseInt(clicked.getAttribute('data-set'), 10);
  const task = JSON.parse(localStorage.getItem('localItem')) || [];
  const update = task.find((todo) => todo.index === targetData);
  update.completed = !update.completed;
  localStorage.setItem('localItem', JSON.stringify(task));
};

export const clearAllTask = () => {
  const setting = JSON.parse(localStorage.getItem('localItem')) || [];
  const notCompleted = setting.filter((taskDailyList) => !taskDailyList.completed);
  setting.length = 0;
  let i = 0;
  notCompleted.forEach((element) => {
    element.index = i;
    i += 1;
  });

  setting.push(...notCompleted);
  localStorage.setItem('localItem', JSON.stringify(setting));
};
