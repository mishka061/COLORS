//метод забирает список необходимых элементов
const cols = document.querySelectorAll(".col");

//если нажали пробел,до должны обновиться цвета
// preventDefault() -отменяем дефолтное поведение
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    setRandomColors();
  }
});

// обращаемся к элементу по которому сделан клик
// dataset хранит объект всех дата_атрибутов, которые есть
// реализуем функцию закрытия замка
// tagName свойство дает в строковом значении название тега по которому кликнули
// если символ i,  то получаем event.target(целевой элемент, который вызывает событие)
// иначе,если кнопка ,то получаем первого ребенка у массива кнопок
document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;
  if (type === "lock") {
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.children[0];

    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  }
});
//функция отдает код рандомно созданного цвета
// 0123456789ABCDEF все цвета, которые генерируют цвет
//Math.floor округляем чтобы получить целое число
//Math.random получаем рандомное число и умножаем на
//кол-во символов в срочке
function generateRandomColor() {
  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}
//создаем рандомные цвета для колонок
//итерируем с помощью forEach стрелочной функцией
//text- меняем цвет,который соответствует колонке
//color- присваиваем тексту значение цвета
//isLoscet-определяем у колонки является ли она заблокированной,если да, то цвет не меняем
// HASH-если цвет заблокированый,то мы его получаем из const text = col.querySelector("h2")
//если нет,то пушим колор
//и после выполнения цикла передаем масив колорз
//
function setRandomColors() {
  const colors = [];
  cols.forEach((col) => {
    const isLoscet = col.querySelector("i").classList.contains("fa-lock");
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    const color = chroma.random();
    if (isLoscet) {
      colors.push(text.textContent);
      return;
    }
    colors.push(color);
    text.textContent = color;
    col.style.background = generateRandomColor();
    setTextColor(text, color);
    setTextColor(button, color);
  });
  updateColorHash(colors);
}

// функция оттенка цвета
// передаем в библиотеку цвет,вызываем метод luminance
// если luminance больше чем 0,5,то цвет черный ,иначе белый
function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

//удаляем # из хеша масива цветов
function updateColorHash(colors = []) {
  document.location.hash = colors
    .map((col) => {
      return col.toString().substring(1);
    })
    .join("-");
}

setRandomColors();
