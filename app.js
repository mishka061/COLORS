//метод забирает список необходимых элементов
const cols =document.querySelectorAll('.col')
 
//функция отдает код рандомно созданного цвета
// 0123456789ABCDEF все цвета, которые генерируют цвет
//Math.floor округляем чтобы получить целое число
//Math.random получаем рандомное число и умножаем на 
//кол-во символов в срочке
function generateRandomColor() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i =0; i < 6; i ++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}
//создаем рандомные цвета для колонок
//итерируем с помощью forEach стрелочной функцией
//text- меняем цвет,который соответствует колонке
//color- присваиваем тексту значение цвета
function setRandomColors() {
    cols.forEach((col) => {
        const text = col.querySelector('h2')
        const color = chroma.random()
        text.textContent = color
        col.style.background = generateRandomColor()
        setTextColor(text, color)
    })
}

// функция оттенка цвета
// передаем в библиотеку цвет,вызываем метод luminance
// если luminance больше чем 0,5,то цвет черный ,иначе белый
function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color =luminance > 0.5 ? 'black' : 'white'
}






setRandomColors()