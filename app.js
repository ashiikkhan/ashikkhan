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
  //  sections active class:
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}
pageTransition();

// another ways to remove and add active btn :

// for (let i = 0; i < sectBtn.length; i++) {
//   sectBtn[i].addEventListener('click', function () {
//     let currentBtn = document.querySelectorAll('.active-btn');
//     currentBtn[0].classList.remove('active-btn');
//     sectBtn[i].classList.add('active-btn');
//   });
// }
// pageTransition();

// function pageTransition() {
//   sectBtn.forEach((button) => {
//     button.addEventListener('click', function () {
//       let currentBtn = document.querySelector('.active-btn');
//       currentBtn.classList.remove('active-btn');
//       button.classList.add('active-btn');
//     });
//   });
// }
// pageTransition();
