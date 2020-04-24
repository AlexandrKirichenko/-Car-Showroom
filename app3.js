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
