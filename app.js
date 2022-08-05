const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition() {
  // button click and set active class:
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }
}
pageTransition();

// another way to remove and add active btn :

// function pageTransition() {
//   for (let i = 0; i < sectBtn.length; i++) {
//     sectBtn[i].addEventListener('click', function () {
//       let currentBtn = document.querySelectorAll('.active-btn');
//       currentBtn[0].classList.remove('active-btn');
//       sectBtn[i].classList.add('active-btn');
//     });
//   }
// }
// pageTransition();
