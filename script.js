



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

const justNumber = document.querySelector('#justNumber');


justNumber.addEventListener ('keydown', function (e) {
   let isNumber = false;
   let isBackspace = false;

   if (e.key >= 0 || e.key <= 9) {
      isNumber = true;
   }

   if (e.key == 'Backspace') {
      isBackspace = true;
   }
   
   if (!isNumber && !isBackspace) {
      e.preventDefault();
   }
})

//форма - формочка

const myForm = document.querySelector ('#myForm');
const sendButton = document.querySelector ('#sendButton');

sendButton.addEventListener ('click', function (e) {
   e.preventDefault();

   if(validateForm(myForm)) {
      console.log('всё заебумба!!!');
   }

   // myForm.elements.name.value;
   // myForm.elements.phone.value;
   // myForm.elements.street.value;
   // myForm.elements.house.value;
   // myForm.elements.corps.value;
   // myForm.elements.apartment.value;
   // myForm.elements.floor.value;
   // myForm.elements.comments.value;
   // myForm.elements.cash.checked;
   // myForm.elements.dontCall.checked;

   if (myForm.elements.cash.value == 'yes') {
      console.log('наличный расчёт'); 
   }else{
      console.log('безналичный расчёт'); 
   }

   if (myForm.elements.dontCall = true) {
      console.log('не перезванивать!');
   }else{
      console.log('клиент ждёт звонка!');
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
}

function validateField (field) {

   if(!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;

      return false;
   }else{
      field.textContent = '';

      return true;
   }
}


// отправка данных на сервер

sendButton.addEventListener ('click', e => {
   e.preventDefault();

   if(validateForm(myForm)) {

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
      xhr.send(JSON.stringify(data));
      xhr.addEventListener('load', () => {
         if (xhr.response.status) {
            console.log('заебумба');
         }
      })
   }
})  




// const data = FormData();
      
      // data.append("name", myForm.elements.name.value)
      
      // {
      //    name: myForm.elements.name.value,
      //    phone: myForm.elements.phone.value,
      //    street: myForm.elements.street.value,
      //    house: myForm.elements.house.value,
      //    corps: myForm.elements.corps.value,
      //    apartament: myForm.elements.apartment.value,
      //    floor: myForm.elements.floor.value,
      //    comments: myForm.elements.comments.value,
      //    cash: myForm.elements.cash.checked,
      //    dontCall: myForm.elements.dontCall.checked
      // }