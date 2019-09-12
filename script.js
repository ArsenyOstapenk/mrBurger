



//слайдер

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('#slider');

const minRight = 0;
const maxRight = 200;
const step = 100;
let currentRight = 0;

slider.style.right = currentRight + '%';

right.addEventListener('click', function (e) {
   e.preventDefault();

   if (currentRight < maxRight) {
      currentRight += step;
      slider.style.left = '-' + currentRight + '%'; 
   } else {
      currentRight = minRight;
      slider.style.left = currentRight + '%';
   }
})

left.addEventListener('click', function (e) {
   e.preventDefault();

   if (currentRight > minRight) {
      currentRight -= step;
      slider.style.left = '-' + currentRight + '%';
   } else {
      currentRight = maxRight;
      slider.style.left = '-' + currentRight + '%';
   }

})

//первая секция

const hmenu = document.querySelector('#hmenu');
const hoverMenu = document.querySelector('#hover-menu');
const cross = document.querySelector('#cross');

hmenu.addEventListener('click', function (e) {
   e.preventDefault();

   hoverMenu.style.display = 'block';
})

cross.addEventListener('click', function (e) {
   e.preventDefault();

   hoverMenu.style.display = 'none';
})

//accordeon

const menu = document.querySelector('.menu');
const menuBlock = document.querySelectorAll('.menu__block');
const menuBlockLenght = menuBlock.length;

menu.addEventListener('click', function (e) {
   for (let i=0; i<menuBlockLenght; i++){
      menuBlock[i].classList.remove('menu__block--active');
   }
})

for (let i=0; i<menuBlockLenght; i++) {
   menuBlock[i].addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();

      if (menuBlock[i].classList.contains('menu__block--active')){
         menuBlock[i].classList.remove('menu__block--active')
      }else{
         for(let i=0; i<menuBlockLenght; i++){
            menuBlock[i].classList.remove('menu__block--active')
         }
         menuBlock[i].classList.add('menu__block--active')
      }
   })
}

//team

const teamBlockRight = document.querySelector('.team__block-right');
const teamMember = document.querySelectorAll('.team__member');
const teamMemberLenght = teamMember.length;


teamBlockRight.addEventListener('click', function (e) {
   for (let i=0; i<teamMemberLenght; i++){
      teamMember[i].classList.remove('team__member--active');
   }
})

for (let i=0; i<teamMemberLenght; i++) {
   teamMember[i].addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();


      if (teamMember[i].classList.contains('team__member--active')){
         teamMember[i].classList.remove('team__member--active')
      }else{
         for(let i=0; i<teamMemberLenght; i++){
            teamMember[i].classList.remove('team__member--active')
         }
         teamMember[i].classList.add('team__member--active')
      }
   })
}


//форма - клавиши

const phone = document.querySelector('#phone');

phone.addEventListener ('keydown', function (e) {
   let isDigit = false;
   let isDash = false;
   let isControl = false;
   let isBackspace = false;

   if (e.key >= 0 || e.key <= 9) {
      isDigit = true;
   }
   if (e.key == '-') {
      isDash = true;
   }

   if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
      isControl = true;
   }

   if (e.key == 'Backspace') {
      isBackspace = true;
   }

   if (!isDigit && !isDash && !isControl && !isBackspace) {
      e.preventDefault();
   }
})

//форма - формочка


const myForm = document.querySelector ('#myForm');
const sendButton = document.querySelector ('#sendButton');
const formRow = document.querySelector('.form__row-block');
const resetButton = document.querySelector('#resetButton');

sendButton.addEventListener ('click', function (e) {
   e.preventDefault();

   if(validateForm(myForm)) {
      console.log('всё заебумба!!!');

      let data = new FormData;
      data.append("name", myForm.elements.name.value);
      data.append("phone", myForm.elements.phone.value);
      data.append("street", myForm.elements.street.value);
      data.append("house", myForm.elements.house.value);
      data.append("corps", myForm.elements.corps.value);
      data.append("apartment", myForm.elements.apartment.value);
      data.append("floor", myForm.elements.floor.value);
      data.append("comment", myForm.elements.comment.value);
      data.append("to", "my@gmail.com");

      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", "https://webdev-api.loftschool.com/sendmail/");
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(data);
      xhr.addEventListener('load', ()=> {
         if (xhr.response.status == 0) {
            const element = document.createElement('div');
            formRow.appendChild(element);
            element.classList.add('message__modal');

            const element2 = document.createElement('div');
            element.appendChild(element2);
            element2.classList.add('message__send');

            const element3 = document.createElement('div');
            element2.appendChild(element3);
            element3.classList.add('message__text');
            element3.textContent = 'Сообщение не отправлено :( проблемы с сервером ';

            const element4 = document.createElement('div');
            element2.appendChild(element4);
            element4.classList.add('close__button');
            element4.textContent = 'X';

            element4.addEventListener('click', function () {
               formRow.removeChild(element);
               resetButton.click();
            })
         }else{
            const element = document.createElement('div');
            formRow.appendChild(element);
            element.classList.add('message__modal');

            const element2 = document.createElement('div');
            element.appendChild(element2);
            element2.classList.add('message__send');

            const element3 = document.createElement('div');
            element2.appendChild(element3);
            element3.classList.add('message__text');
            element3.textContent = 'Сообщение отправлено';

            const element4 = document.createElement('div');
            element2.appendChild(element4);
            element4.classList.add('close__button');
            element4.textContent = 'X';

            element4.addEventListener('click', function () {
               formRow.removeChild(element);
               resetButton.click();
            })
            
            element.addEventListener('click', e => {
               let elem = e.target
               if (elem.classList != 'message__send' && elem.classList != 'message__text') {
                  formRow.removeChild(element);
                  resetButton.click();
               }
            })
         }
      sendButton.disabled = false;
      })

      if (myForm.elements.cash.value == 'yes') {
         console.log('наличный расчёт');
      } else {
         console.log('безналичный расчёт');
      }

      if (myForm.elements.dontCall = true) {
         console.log('не перезванивать!');
      } else {
         console.log('клиент ждёт звонка!');
      }
   }
})



function validateForm (form) {
   let valid = true;
   if (!validateField(form.elements.name)) {
      valid = false;
   }
   if (!validateField(form.elements.phone)) {
      valid = false;
   }
   if (!validateField(form.elements.street)) {
      valid = false;
   } 
   if (!validateField(form.elements.house)) {
      valid = false;
   }
   if (!validateField(form.elements.comment)) {
      valid = false;
   }

   return valid;
}

function validateField (field) {

   if(!field.checkValidity()) {
      field.nextElementSibling.textContent = 'заполните это поле';//field.validationMessage;

      return false;
   }else{
      field.nextElementSibling.textContent = '';

      return true;
   }
}



//модалка отзывов

const reviews = document.querySelector('.reviews');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup__text');
const reviewsButton = document.querySelector('#reviews-button');



reviews.addEventListener('click', e => {
   let elem = e.target;

   if (elem.tagName === 'BUTTON') {
      let modalText = elem.previousElementSibling.textContent;
      popup.textContent = modalText;
      overlay.style.display = 'flex';
   }
})

reviewsButton.addEventListener('click', function () {
   overlay.style.display = 'none';
})

overlay.addEventListener('click', e => {
   let elem = e.target
   if (elem.classList != 'popup' && elem.classList != 'popup__text') {
      overlay.style.display = 'none';
   }
})