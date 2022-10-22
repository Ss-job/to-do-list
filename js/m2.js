
class ToDoList {
    constructor() {
        this.addButton = document.querySelector('.button');
        this.sortBlack = document.querySelector('.img-sort');
        this.deleteItem = document.querySelector('.delete-item');
        this.listItem = document.querySelector('.list-item');
        this.abc = 0;
        this.listBox = document.querySelector('.list-box');

    }
    createListItem = () => {
        let listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
            <div class="item-string">
            <input class="text" type="text" name="task">
            </div>
        `;
        this.listBox.append(listItem);
        return listItem;
    }
    // Добавление крестика
    createDeleteBtn = (listItem) => {
        let deleteItem = document.createElement('div');
        deleteItem.classList.add('delete-item');
        deleteItem.innerHTML = `
                <div class="delete-item">
                   <img src="images/Delete.svg" alt="" class="">
                </div>`;

        this.addDeleteBtnAction(deleteItem, listItem);
        // Крестик изменение цвета
        this.changeItem(deleteItem, './images/Delete-blue.svg', './images/Delete.svg');

        listItem.append(deleteItem);

        return deleteItem;
    }

    addDeleteBtnAction = (deleteItem, listItem) => {
        // Удаление listItem

        deleteItem.addEventListener('click', () => {
            listItem.remove();
        });
    }

    //Удаление текста первого пункта или первой строки
    deleteLastItem = () => {
            
        this.deleteItem.addEventListener('click', () => {
            let deleteFirstItems = document.querySelectorAll('.delete-item');
        
        if (deleteFirstItems.length > 1) {
            
            this.addDeleteBtnAction(this.deleteItem, this.listItem);
        } 
        if (deleteFirstItems.length === 1) {
            
            let inputString1 = document.querySelector('.text');
                inputString1.value = '';
                inputString1.textContent = '';
           
            }
        })
        }

        addlistItem = () => {

            let listItem = this.createListItem();
            this.createDeleteBtn(listItem);

        }

        // Сортировка

        sort = () => {

            let input = document.querySelectorAll('.text');
            let arrString = [];
            let sorted = [];


            input.forEach((element) => {
                arrString.push(element.value);
                element.value = '';

            });

            if (this.abc === 0) {
                this.sortBlack.src = './images/Sort-black.svg';
                this.changeItem(this.sortBlack, './images/Sort-black.svg', './images/Sort.svg')
                sorted = arrString.sort((a, b) => {
                    if (a > b) {
                        return -1;
                    }
                })

                for (let i = 0; i < sorted.length; i++) {
                    input[i].value = sorted[i];
                }
                this.abc = 1;

            } else {
                this.changeItem(this.sortBlack, './images/Sort-black-reverse.svg', './images/Sort-reverse.svg');
                this.sortBlack.src = './images/Sort-black-reverse.svg';

                sorted = arrString.sort((a, b) => {
                    if (a < b) {
                        return -1;
                    }
                })

                for (let i = 0; i < sorted.length; i++) {
                    input[i].value = sorted[i];
                }
                this.abc = 0;

            }
        }

        //Сортировка изменение цвета
        /**
         * Изменение цвета при наведении курсора мышки
         * @param {nameVariable} имя переменной
         * @param {img}  курсор на иконке
         * @param {imgMouse} курсор вне иконки 
         */

        changeItem = (nameVariable, img, imgMouse) => {
            nameVariable.addEventListener('mouseover', (e) => {
                e.target.src = img;
            });
            nameVariable.addEventListener('mouseout', (e) => {
                e.target.src = imgMouse;
            });
        }

        init() {
            this.addlistItem();
            this.addButton.addEventListener('click', this.addlistItem);
            if (this.abc === 0) {

                this.changeItem(this.sortBlack, './images/Sort-black.svg', './images/Sort.svg')
            } else {
                this.changeItem(this.sortBlack, './images/Sort-black-reverse.svg', './images/Sort-reverse.svg')
            }
            this.sortBlack.addEventListener('click', this.sort);
            this.changeItem(this.deleteItem, './images/Delete-blue.svg', './images/Delete.svg');
            this.deleteLastItem();
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

// let a = document.querySelectorAll('.text');
// console.dir(a);
