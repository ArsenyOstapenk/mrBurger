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
