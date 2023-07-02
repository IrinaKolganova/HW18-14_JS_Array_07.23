// 2. **Задание: Анализ оценок студентов**
//     Вам необходимо написать программу, которая проведёт анализ оценок студентов и выполнит несколько операций с использованием методов массивов.
//     Шаги выполнения:

//     1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
const grades = [];
grades.push(
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100)
);
console.log(grades);

//     2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
let avarageGrade = 0;
grades.forEach(function (item) { avarageGrade = avarageGrade + item; })
console.log(Math.round(avarageGrade / 12));

//     3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
grades.sort(function (a, b) {
  return a - b;
});
console.log(grades[grades.length - 1]);

//     4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
console.log(grades[0]);

//     5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. 

const positiveGrade = grades.filter((item) => {
  if (item >= 60) {
    return true
  }
  return false
})
console.log(positiveGrade);
//     Затем посчитайте количество оставшихся оценок и выведите результат.
console.log(12 - positiveGrade.length);

//     6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrade = grades.filter((item) => {
  if (item < 60) {
    return true
  }
  return false
})
console.log(negativeGrade);
console.log(negativeGrade.length);

//     7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//         - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//         - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//         - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//         - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//         - Если оценка ниже 20, преобразуйте её в "E"
const [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve] = grades;
function getGrade() {
  if (one >= 80) {
    const p = document.createElement('p');
    p.textContent = "A";
  }
  else if (one >= 60 && one < 80) {
    const p = document.createElement('p');
    p.textContent = "B";
  }
  else if (one >= 40 && one < 60) {
    const p = document.createElement('p');
    p.textContent = "C";
  }
  else if (one >= 20 && one < 40) {
    const p = document.createElement('p');
    p.textContent = "D";
  }
  else {
    const p = document.createElement('p');
    p.textContent = "E";
  }
  // Кот, подскажи пожалуйста, почему по коду выше не создается параграф на странице с оценкой (по нажатию на кнопку)? В чём ошибка?
  // Т.к. по коду выше вывести значение не получилось - остальные 11 значений решила пока вывести в консоль.
  if (two >= 80) { console.log("A"); }
  else if (two >= 60 && two < 80) { console.log("B"); }
  else if (two >= 40 && two < 60) { console.log("C"); }
  else if (two >= 20 && two < 40) { console.log("D"); }
  else { console.log("E"); }

  if (three >= 80) { console.log("A"); }
  else if (three >= 60 && three < 80) { console.log("B"); }
  else if (three >= 40 && three < 60) { console.log("C"); }
  else if (three >= 20 && three < 40) { console.log("D"); }
  else { console.log("E"); }

  if (four >= 80) { console.log("A"); }
  else if (four >= 60 && four < 80) { console.log("B"); }
  else if (four >= 40 && four < 60) { console.log("C"); }
  else if (four >= 20 && four < 40) { console.log("D"); }
  else { console.log("E"); }

  if (five >= 80) { console.log("A"); }
  else if (five >= 60 && five < 80) { console.log("B"); }
  else if (five >= 40 && five < 60) { console.log("C"); }
  else if (five >= 20 && five < 40) { console.log("D"); }
  else { console.log("E"); }

  if (six >= 80) { console.log("A"); }
  else if (six >= 60 && six < 80) { console.log("B"); }
  else if (six >= 40 && six < 60) { console.log("C"); }
  else if (six >= 20 && six < 40) { console.log("D"); }
  else { console.log("E"); }

  if (seven >= 80) { console.log("A"); }
  else if (seven >= 60 && seven < 80) { console.log("B"); }
  else if (seven >= 40 && seven < 60) { console.log("C"); }
  else if (seven >= 20 && seven < 40) { console.log("D"); }
  else { console.log("E"); }

  if (eight >= 80) { console.log("A"); }
  else if (eight >= 60 && eight < 80) { console.log("B"); }
  else if (eight >= 40 && eight < 60) { console.log("C"); }
  else if (eight >= 20 && eight < 40) { console.log("D"); }
  else { console.log("E"); }

  if (nine >= 80) { console.log("A"); }
  else if (nine >= 60 && nine < 80) { console.log("B"); }
  else if (nine >= 40 && nine < 60) { console.log("C"); }
  else if (nine >= 20 && nine < 40) { console.log("D"); }
  else { console.log("E"); }

  if (ten >= 80) { console.log("A"); }
  else if (ten >= 60 && ten < 80) { console.log("B"); }
  else if (ten >= 40 && ten < 60) { console.log("C"); }
  else if (ten >= 20 && ten < 40) { console.log("D"); }
  else { console.log("E"); }

  if (eleven >= 80) { console.log("A"); }
  else if (eleven >= 60 && eleven < 80) { console.log("B"); }
  else if (eleven >= 40 && eleven < 60) { console.log("C"); }
  else if (eleven >= 20 && eleven < 40) { console.log("D"); }
  else { console.log("E"); }

  if (twelve >= 80) { console.log("A"); }
  else if (twelve >= 60 && twelve < 80) { console.log("B"); }
  else if (twelve >= 40 && twelve < 60) { console.log("C"); }
  else if (twelve >= 20 && twelve < 40) { console.log("D"); }
  else { console.log("E"); }

};

//     Выведите все найденные значения на экран.
button.addEventListener('click', getGrade);

//Уверена, п.7 как-то можно реализовать сильно короче, скорее всего?)) Подскажи пожалуйста как???