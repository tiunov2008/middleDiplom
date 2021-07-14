const sliderServices = () => {

    const slide = document.querySelectorAll('.services-item');
    const slider = document.querySelector('#services');

    let currentSlide1 = 0;
    let currentSlide2 = 1;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    slider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        if (target.closest('.services__arrow') === null) {
            return;
        }
        prevSlide(slide, currentSlide1, 'services-item-active-1');
        prevSlide(slide, currentSlide2, 'services-item-active-2');
        if (target.closest('.services__arrow') === document.querySelector('.services__arrow--right')) {
            currentSlide1++;
            currentSlide2++;
        } else if (target.closest('.services__arrow') === document.querySelector('.services__arrow--left')) {
            currentSlide1--;
            currentSlide2--;
        }
        if (currentSlide1 >= slide.length) {
            currentSlide1 = 0;
        }

        if (currentSlide2 >= slide.length) {
            currentSlide2 = 0;
        }
        if (currentSlide1 < 0) {
            currentSlide1 = slide.length - 1;
        }

        if (currentSlide2 < 0) {
            currentSlide2 = slide.length - 1;
        }
        nextSlide(slide, currentSlide1, 'services-item-active-1');
        nextSlide(slide, currentSlide2, 'services-item-active-2');
    });
};

export default sliderServices;
