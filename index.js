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
const list = document.querySelector('.list');
function getGrade() {

  if (one >= 80) {
    const grade1 = document.createElement('p');
    grade1.textContent = 'A';
    list.append(grade1);
  }
  else if (one >= 60 && one < 80) {
    const grade1 = document.createElement('p');
    grade1.textContent = 'B';
    list.append(grade1);
  }
  else if (one >= 40 && one < 60) {
    const grade1 = document.createElement('p');
    grade1.textContent = 'C';
    list.append(grade1);
  }
  else if (one >= 20 && one < 40) {
    const grade1 = document.createElement('p');
    grade1.textContent = 'D';
    list.append(grade1);
  }
  else {
    const grade1 = document.createElement('p');
    grade1.textContent = 'E';
    list.append(grade1);
  }

  if (two >= 80) {
    const grade2 = document.createElement('p');
    grade2.textContent = 'A';
    list.append(grade2);
  }
  else if (two >= 60 && two < 80) {
    const grade2 = document.createElement('p');
    grade2.textContent = 'B';
    list.append(grade2);
  }
  else if (two >= 40 && two < 60) {
    const grade2 = document.createElement('p');
    grade2.textContent = 'C';
    list.append(grade2);
  }
  else if (two >= 20 && two < 40) {
    const grade2 = document.createElement('p');
    grade2.textContent = 'D';
    list.append(grade2);
  }
  else {
    const grade2 = document.createElement('p');
    grade2.textContent = 'E';
    list.append(grade2);
  }

  if (three >= 80) {
    const grade3 = document.createElement('p');
    grade3.textContent = 'A';
    list.append(grade3);
  }
  else if (three >= 60 && three < 80) {
    const grade3 = document.createElement('p');
    grade3.textContent = 'B';
    list.append(grade3);
  }
  else if (three >= 40 && three < 60) {
    const grade3 = document.createElement('p');
    grade3.textContent = 'C';
    list.append(grade3);
  }
  else if (three >= 20 && three < 40) {
    const grade3 = document.createElement('p');
    grade3.textContent = 'D';
    list.append(grade3);
  }
  else {
    const grade3 = document.createElement('p');
    grade3.textContent = 'E';
    list.append(grade3);
  }

  if (four >= 80) {
    const grade4 = document.createElement('p');
    grade4.textContent = 'A';
    list.append(grade4);
  }
  else if (four >= 60 && four < 80) {
    const grade4 = document.createElement('p');
    grade4.textContent = 'B';
    list.append(grade4);
  }
  else if (four >= 40 && four < 60) {
    const grade4 = document.createElement('p');
    grade4.textContent = 'C';
    list.append(grade4);
  }
  else if (four >= 20 && four < 40) {
    const grade4 = document.createElement('p');
    grade4.textContent = 'D';
    list.append(grade4);
  }
  else {
    const grade4 = document.createElement('p');
    grade4.textContent = 'E';
    list.append(grade4);
  }

  if (five >= 80) {
    const grade5 = document.createElement('p');
    grade5.textContent = 'A';
    list.append(grade5);
  }
  else if (five >= 60 && five < 80) {
    const grade5 = document.createElement('p');
    grade5.textContent = 'B';
    list.append(grade5);
  }
  else if (five >= 40 && five < 60) {
    const grade5 = document.createElement('p');
    grade5.textContent = 'C';
    list.append(grade5);
  }
  else if (five >= 20 && five < 40) {
    const grade5 = document.createElement('p');
    grade5.textContent = 'D';
    list.append(grade5);
  }
  else {
    const grade5 = document.createElement('p');
    grade5.textContent = 'E';
    list.append(grade5);
  }

  if (six >= 80) {
    const grade6 = document.createElement('p');
    grade6.textContent = 'A';
    list.append(grade6);
  }
  else if (six >= 60 && six < 80) {
    const grade6 = document.createElement('p');
    grade6.textContent = 'B';
    list.append(grade6);
  }
  else if (six >= 40 && six < 60) {
    const grade6 = document.createElement('p');
    grade6.textContent = 'C';
    list.append(grade6);
  }
  else if (six >= 20 && six < 40) {
    const grade6 = document.createElement('p');
    grade6.textContent = 'D';
    list.append(grade6);
  }
  else {
    const grade6 = document.createElement('p');
    grade6.textContent = 'E';
    list.append(grade6);
  }

  if (seven >= 80) {
    const grade7 = document.createElement('p');
    grade7.textContent = 'A';
    list.append(grade7);
  }
  else if (seven >= 60 && seven < 80) {
    const grade7 = document.createElement('p');
    grade7.textContent = 'B';
    list.append(grade7);
  }
  else if (seven >= 40 && seven < 60) {
    const grade7 = document.createElement('p');
    grade7.textContent = 'C';
    list.append(grade7);
  }
  else if (seven >= 20 && seven < 40) {
    const grade7 = document.createElement('p');
    grade7.textContent = 'D';
    list.append(grade7);
  }
  else {
    const grade7 = document.createElement('p');
    grade7.textContent = 'E';
    list.append(grade7);
  }

  if (eight >= 80) {
    const grade8 = document.createElement('p');
    grade8.textContent = 'A';
    list.append(grade8);
  }
  else if (eight >= 60 && eight < 80) {
    const grade8 = document.createElement('p');
    grade8.textContent = 'B';
    list.append(grade8);
  }
  else if (eight >= 40 && eight < 60) {
    const grade8 = document.createElement('p');
    grade8.textContent = 'C';
    list.append(grade8);
  }
  else if (eight >= 20 && eight < 40) {
    const grade8 = document.createElement('p');
    grade8.textContent = 'D';
    list.append(grade8);
  }
  else {
    const grade8 = document.createElement('p');
    grade8.textContent = 'E';
    list.append(grade8);
  }

  if (nine >= 80) {
    const grade9 = document.createElement('p');
    grade9.textContent = 'A';
    list.append(grade9);
  }
  else if (nine >= 60 && nine < 80) {
    const grade9 = document.createElement('p');
    grade9.textContent = 'B';
    list.append(grade9);
  }
  else if (nine >= 40 && nine < 60) {
    const grade9 = document.createElement('p');
    grade9.textContent = 'C';
    list.append(grade9);
  }
  else if (nine >= 20 && nine < 40) {
    const grade9 = document.createElement('p');
    grade9.textContent = 'D';
    list.append(grade9);
  }
  else {
    const grade9 = document.createElement('p');
    grade9.textContent = 'E';
    list.append(grade9);
  }

  if (ten >= 80) {
    const grade10 = document.createElement('p');
    grade10.textContent = 'A';
    list.append(grade10);
  }
  else if (ten >= 60 && ten < 80) {
    const grade10 = document.createElement('p');
    grade10.textContent = 'B';
    list.append(grade10);
  }
  else if (ten >= 40 && ten < 60) {
    const grade10 = document.createElement('p');
    grade10.textContent = 'C';
    list.append(grade10);
  }
  else if (ten >= 20 && ten < 40) {
    const grade10 = document.createElement('p');
    grade10.textContent = 'D';
    list.append(grade10);
  }
  else {
    const grade10 = document.createElement('p');
    grade10.textContent = 'E';
    list.append(grade10);
  }

  if (eleven >= 80) {
    const grade11 = document.createElement('p');
    grade11.textContent = 'A';
    list.append(grade11);
  }
  else if (eleven >= 60 && eleven < 80) {
    const grade11 = document.createElement('p');
    grade11.textContent = 'B';
    list.append(grade11);
  }
  else if (eleven >= 40 && eleven < 60) {
    const grade11 = document.createElement('p');
    grade11.textContent = 'C';
    list.append(grade11);
  }
  else if (eleven >= 20 && eleven < 40) {
    const grade11 = document.createElement('p');
    grade11.textContent = 'D';
    list.append(grade11);
  }
  else {
    const grade11 = document.createElement('p');
    grade11.textContent = 'E';
    list.append(grade11);
  }

  if (twelve >= 80) {
    const grade12 = document.createElement('p');
    grade12.textContent = 'A';
    list.append(grade12);
  }
  else if (twelve >= 60 && one < 80) {
    const grade12 = document.createElement('p');
    grade12.textContent = 'B';
    list.append(grade12);
  }
  else if (twelve >= 40 && twelve < 60) {
    const grade12 = document.createElement('p');
    grade12.textContent = 'C';
    list.append(grade12);
  }
  else if (twelve >= 20 && twelve < 40) {
    const grade12 = document.createElement('p');
    grade12.textContent = 'D';
    list.append(grade12);
  }
  else {
    const grade12 = document.createElement('p');
    grade12.textContent = 'E';
    list.append(grade12);
  }
};

//     Выведите все найденные значения на экран.
button.addEventListener('click', getGrade);

//Уверена, п.7 как-то можно реализовать сильно короче, скорее всего?)) Подскажи пожалуйста как???