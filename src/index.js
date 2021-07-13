'use strict';

import applicationForm from './modules/applicationForm';
import calc from './modules/calc';
import countTimer from './modules/countTimer';
import documents from './modules/documents';
import headerModal from './modules/headerModal';
import servicesModal from './modules/servicesModal';
import SliderСarousel from './modules/sliderCarousel';
import sliderServices from './modules/sliderServices';
import smoothScroll from './modules/smoothScroll';


document.addEventListener('DOMContentLoaded', () => {
    headerModal();
    smoothScroll();
    servicesModal();
    applicationForm(document.querySelector('#form1'));
    applicationForm(document.querySelector('#form2'));
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
