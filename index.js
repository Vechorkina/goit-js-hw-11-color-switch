// массив цветов
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
// объект элементов
const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let timeoutId = null;

refs.startBtn.addEventListener("click", clickStart);

//функция создания инлайн-стиля для body
function colorChange() {
  //функция генерации случайного числа для индекса массива цветов
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // возврат инлайн-стилей
  return (refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]);
}

function clickStart() {
  console.log("Start");

  //включаем интервал и вызываем колбек
  timeoutId = setInterval(colorChange, 1000);
  //добавляем слушатель на slickStop и убираем слушатель с clickStart
  refs.stopBtn.addEventListener("click", clickStop);
  refs.startBtn.removeEventListener("click", clickStart);
}

function clickStop() {
  console.log("Stop");
  // прерываем интервал
  clearInterval(timeoutId);
  //ставим слушатель на clickStart и убираем слушатель с clickStop
  refs.startBtn.addEventListener("click", clickStart);
  refs.stopBtn.removeEventListener("click", clickStop);
}
