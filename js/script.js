"use strict"

document.addEventListener('DOMContentLoaded', () => {


   const slide = document.querySelectorAll('.slide'); 
   const slider = document.querySelector('.slider-inner'); 
   const prev = document.querySelector('.slider-prev'); 
   const next = document.querySelector('.slider-next'); 

   let counter = 0;
   let stepSize = slide[0].clientWidth;

   slider.style.transform = `translateX(${-stepSize * counter}px)`;


      next.addEventListener('click', () => {
         if (counter >= slide.length-4) {
            counter = -1;
         }
         slider.classList.add('transformAnimation');
         counter++;
         slider.style.transform = `translateX(${-stepSize * counter}px)`;
         console.log(counter);
      });

      prev.addEventListener('click', () => {
         if (counter <=0) {counter = slide.length-3;}
         slider.classList.add('transformAnimation');
         counter--;
         slider.style.transform = `translateX(${-stepSize * counter}px)`;
         console.log(counter);
      });

      

});