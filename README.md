# HW18-14_JS_Array_07.23
Home Work_week18 (14)_new
### Вопросы 💎

1. Что называется массивом?
//это любой упорядоченный набор или коллекция элементов. Задача массивов - собрать эти элементы под одним именем.
2. С какого порядкового номера начинаются массивы?
//с 0;
3. Сколько значений может иметь массив?
//сколько угодно
4. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas[3]);
    ```
//5
5. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas3);
    ```
    //Если в данном вопросе нет ошибки - то ответом будет ошибка, т.к. "mas3" - нигде не фигурировало до вывода в консоль...
    Если же в консоль надо было вывести "mas" (т.е. console.log(mas)), то ответом будет [,,,5]
6. Что делает строка let mas = new Array()?
//Это также вариант создания массива, более длинный, который используется редко. В нем есть особенность: если в () вставить не строку, а число - оно будет показывать не число, а длину массива. (как в примере выше)
7. Может ли массив состоять из элементов разных типов?
//Да
8. Укажите длину массива после исполнения следующего кода:
    
    ```jsx
    let a = new Array(2);
    a[1] = null;
    ```
//2
9. Что выведет консоль?
    
    ```jsx
    const students = [“Lena", “Olya", "Ylia", "Roma" ,  "Vova" ];
    console.log(students[3]);
    ```
//Из-за неверных кавычек - ошибку. А если бы кавычки были одинаковыми - то в консоли был бы Roma
10. Что выведет третья строка?
1. const fruits = [ "Груша", "Яблоко", "Лимон", "Ананас",];

2. console.log(fruits.shift()); 

3. console.log(fruits);
//["Яблоко", "Лимон", "Ананас"]

11. Какой метод массива JavaScript используется для добавления элемента в конец массива?
//push (например: fruits.push("Груша"))