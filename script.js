'use strict';
const modal = document.querySelector(`.modal`);
const showModalBtn = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector(`.close-modal`);
const overlay = document.querySelector('.overlay');

//modal functions
const hide = function () {
    overlay.classList.add(`hidden`);
    modal.classList.add(`hidden`);
}
const unhide = function () {
    overlay.classList.remove(`hidden`);
    modal.classList.remove(`hidden`);
}
console.log(showModalBtn);


//event listeners for buttons
for (let i = 0; i < showModalBtn.length; i++)
    showModalBtn[i].addEventListener(`click`, unhide, console.log(`button clicked`));

closeModalBtn.addEventListener('click', hide);

overlay.addEventListener('click', hide);

//event listener for escape key
document.addEventListener(`keydown`, function (e) {
    // console.log(e.key);

    //works only when esc is pressed and if the modal is not hidden anymore
    if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
        hide();
        console.log(`pressed`);
    }

})


// for (let i = 0; i < showModalBtn.length; i++)
//     showModalBtn[i].addEventListener(`click`, function () {
//         console.log(`button clicked`);
//         overlay.classList.remove(`hidden`);
//         modal.classList.remove(`hidden`);

//     });

// closeModalBtn.addEventListener('click', function () {
//     overlay.classList.add(`hidden`);
//     modal.classList.add(`hidden`);
// });

