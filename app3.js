const one = document.querySelector('.one');

one.setAttribute('data-num',6)

let out = document.querySelector('.out');
let auto = document.querySelectorAll('.auto');//получаем кнопки. Это массив, а значит мы должны его перебрать вешаем событие 

for (let i = 0; i < auto.length;i++) {
    auto[i].onclick = function () {
        let auto = document.querySelector('.model').value;// получаю номер модели
        let amount = this.getAttribute('data')//атрибут по которому нажали
        console.log(auto * amount);
        return out.innerHTML=auto * amount;
    }
}
// мы должжны получить какую кнопку мы кликнули у нас есть атррибут класс, и в баттонах допишем атриб дата
let a = document.createElement('div');// создаем элемент div с пом JS
a.innerHTML = 'Hello!';
a.classList.add('classno');// с пом add добавляем класс classno
a.onclick = function () {
    alert('hello');
}
console.log(a);
//создаем div class=test в HTML
document.querySelector('.test').appendChild(a);

Шахматная доска(первый цикл for отвечает за строки, 2ой за их наполнение)
for (let i = 0; i < 8; i++) {
    let res = '';

    if (i % 2) {
      a = '#';
      b = ' ';
    } else {
      a = ' ';
      b = '#';
    }

    for (let j = 0; j < 8; j++) {
      if (j % 2) {
        res += a;
      } else {
        res += b;
      }
    }
    console.log(res);
    }
    
//Написать функцию , которая посимвольно выводит строку 'Hello' посимвольно
const str = 'Hello';
.toUpperCase() метод перевода вверхний регистр
const pos =  (str) => {
    for(let i=0;i<str.length;i++){
        console.log(str[i]);
    }
    return str
}
pos(str);
принять,сроку вернуть ввверх регистре
const pos =  (str) => {
  let res ='';
  for(let i=0;i<str.length;i++){
      res += str[i].toUpperCase()
      
  }
  return res
}
console.log(pos(str));
//принимает в себя строку и так называемый старт индекс и энд индекс и делает обрезку этой строки и возвращает обрезанную строку? И если нет послед параметра, вернем часть строки до конца, если нет првго 2го параметра врнем всю строку.Если последний параметр юольше длинны строки вернуть длинну строки
const str = 'SoLongString'
const cut = (str,t,h) => {
    if (!h){
        h = str.length;
    }
    let res='';
    for(let i=t;i<h;i++){
        res += str[i]
    }
    return res
}
console.log(cut(str,2,7));
//с тернарником
const str = 'SoLongString'
const cut = (str,start,end) => {
  
    let res='';
    for(let i=start?start:0; i < (end?(end>str.length?str.length:end):str.length);i++){ //если h есть, мы возвращаем h,если нет возвращаем длинну строкиважно не забыть скобки в тернарном выражении
        res += str[i]
    }
    return res
}
console.log(cut(str,2,16));
//написать функц кот. сравнит 2 строки,на предмет, что они одинаковы  посимвольно

const comprasion = (str1,str2) => {
    if (str1.length != str2.length) return false;
    for(let i=0;i<str1.length;i++){
        if (str1[i] != str2[i]) return false;
      } 
      return true
  }
//Есть строка и символ, Если мы находим символ внутри этой строки мы возвращаем позицию первого вхождения(индекс), если не находим возвращаем -1

const foo = (str,char) => {
    
    for(let i=0;i<str.length;i++){
      if (str[i] == char) return i;
    } 
    return i-1
}

const foo = (str,str2) => {
    
  for(let i=0;i<str.length;i++){
    if (str[i] == str2[i]) return str2[0];
  } 
  return -1
}
