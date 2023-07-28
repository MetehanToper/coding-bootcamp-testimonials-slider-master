const slide_1 = document.querySelector('.slide-1');
const slide_2 = document.querySelector('.slide-2');
const nextBtn = document.querySelector('.next-svg');
const prevBtn_2 = document.querySelector('.prev-svg-2');


slide_2.classList.add(`hidden`);


 nextBtn.addEventListener('click', () => {
     slide_1.classList.add('hidden');
     slide_2.classList.remove('hidden');
  });


prevBtn_2.addEventListener('click', () => {
    slide_1.classList.remove('hidden');
    slide_2.classList.add('hidden');
 });




 

