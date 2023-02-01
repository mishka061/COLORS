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
function setRandomColors() {
    cols.forEach((col) => {
        col.style.background = generateRandomColor()
    })
}
setRandomColors()