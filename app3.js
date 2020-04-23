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
