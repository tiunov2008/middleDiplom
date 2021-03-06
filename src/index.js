'use strict';

import sendForm from './modules/sendForm';
import calc from './modules/calc';
import countTimer from './modules/countTimer';
import documents from './modules/documents';
import modal from './modules/modal';
import SliderСarousel from './modules/sliderCarousel';
import sliderServices from './modules/sliderServices';
import smoothScroll from './modules/smoothScroll';
import reviews from './modules/reviews';


document.addEventListener('DOMContentLoaded', () => {
    modal('services-modal', 'service-button');
    smoothScroll();
    modal('header-modal', 'button');
    sliderServices();
    calc();
    reviews();
    document.querySelector('.fancyClose').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('#responseMessage').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    });
    documents();
    sendForm(document.querySelector('#form1'));
    sendForm(document.querySelector('#form2'));
    sendForm(document.querySelector('#form3'));
    const date = new Date();
    countTimer(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 2}`, true);
    countTimer(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 2}`, false);

    const carousel = new SliderСarousel({
        main: '.benefits-inner',
        wrap: '.benefits-wrap',
        infinity: true,
        slidesToShow: 3,
        next: '.benefits__arrow--right',
        prev: '.benefits__arrow--left',

        responsive: [
            {
                breakpoint: 576,
                slideToShow: 1,
            }]
    });
    carousel.init();
});
