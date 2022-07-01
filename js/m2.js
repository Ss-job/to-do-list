
class ToDoList {
    constructor() {
        this.addButton = document.querySelector('.button');
        this.sortBlack = document.querySelector('.img-sort');

    }
    addlistItem = () => {

        let listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
        <div class="item-string">
        <input class="text" type="text" name="task">
        </div>
    `;
        listBox.append(listItem);

        // Добавление крестика
        let deleteItem = document.createElement('div');
        deleteItem.classList.add('delete-item');
        deleteItem.innerHTML = `
        <div class="delete-item">
        <img src="images/Delete.svg" alt="" class="">
        </div>`;
        listItem.append(deleteItem);

        // Удаление listItem

        deleteItem.addEventListener('click', () => {
            listItem.remove();
        });


        // Крестик изменение цвета
        
        this.deleteItemColor = document.querySelectorAll('.delete-item');

        this.deleteItemColor.forEach((element) => {
            this.colorChange(element, './images/Delete-blue.svg', './images/Delete.svg')
        });
    }

        //Сортировка изменение цвета


        /**
         * Изменение цвета при наведении курсора мышки
         * @param {nameVariable} имя переменной
         * @param {img}  курсор на иконке
         * @param {imgMouse} курсор вне иконки 
         */

        colorChange = (nameVariable, img, imgMouse) => {
        nameVariable.addEventListener('mouseover', (e) => {
            e.target.src = img;
        });
        nameVariable.addEventListener('mouseout', (e) => {
            e.target.src = imgMouse;
        });
        }
    
    init() {
        // this.addlistItem();
        this.addButton.addEventListener('click', this.addlistItem);
        this.colorChange(this.sortBlack, './images/Sort-black.svg', './images/Sort.svg')
    }
}

let list = new ToDoList;
list.init();


// Изменение цвета кнопки "Добавить"
let addButton = document.querySelector('.button');
let buttonRound = document.querySelector('.button-round');


addButton.addEventListener('mouseover', (el) => {
    addButton.style.backgroundColor = '#9953F1';
    buttonRound.style.backgroundColor = '#AA68FE';
});
addButton.addEventListener('mouseout', (event) => {
    buttonRound.style.backgroundColor = '#9953F1';
    addButton.style.backgroundColor = '#833AE0';
});





let listBox = document.querySelector('.list-box');





let inputString = document.querySelectorAll('.text');



// // Сохранение текста в textContent

// inputString.forEach((element) => {
//     element.addEventListener('mouseout', (e) => {
//         e.target.textContent = e.target.value;
//     });
// });

// ToDoList.sortBlack.addEventListener('click', sort);

let arrString = [];
function sort() {

    inputString.forEach((element) => {
        console.log(element.textContent);
        // arrString.push (element.textContent);
        // console.log(arrString);
    });
}


//Удаление текста первого пункта

let listItemBox = document.querySelectorAll('.list-item');
console.dir(listItemBox);
let inputString1 = document.querySelector('.text');
if (listItemBox.lenght===1) {
    inputString1.value='';
    inputString1.textContent='';

} 

// let a = document.querySelectorAll('.text');
// console.dir(a);