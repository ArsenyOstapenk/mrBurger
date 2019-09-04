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

// right.addEventListener ('click', function (e) {
//    e.preventDefault();

//    loop("right");
// });

// left.addEventListener('click', function (e) {
//    e.preventDefault();

//    loop("left");
// });

// function loop (direction) {

//    if (direction === "right"){
//       slider.appendChild(slider.firstElementChild);
//    }else{
//       slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
//    }
// };

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
            // teamMember[i].classList.remove('team__member--active')
         }
         teamMember[i].classList.add('team__member--active')
      }
   })
   
}