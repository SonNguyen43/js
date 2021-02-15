/*
const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');

text.style.color = 'white';
text.style.backgroundColor = 'red';

//text.classList.add('change');
//text.classList.remove('change');

changeColor.addEventListener('click', () => {
    text.classList.add('change');
});
*/

//const userList = document.querySelectorAll('.name-list');
const userList = document.querySelector('.name-list');
const listInput = document.querySelector('.list-input');
const addListBtn = document.querySelector('.addListBtn');

// for(user of userList){
//     user.addEventListener('click', function(){
//         this.style.color = 'red';
//     });
// }

addListBtn.addEventListener('click', function(){
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);

    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});
