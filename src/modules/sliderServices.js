const sliderServices = () => {
    let responsive;

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

    if (document.body.clientWidth > 576) {
        responsive = true;
    } else {
        responsive = false;
        if (document.querySelector('.services-item-active-2')) {
            document.querySelector('.services-item-active-2').classList.remove('services-item-active-2');
            const style = document.createElement('style');
            style.textContent = `
            .services-item {
                -webkit-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
            }`;
            document.head.appendChild(style);
        }
    }
    window.addEventListener('resize', () => {
        if (document.body.clientWidth > 576) {
            responsive = true;
            console.log(responsive);
        } else {
            responsive = false;
            if (document.querySelector('.services-item-active-2')) {
                document.querySelector('.services-item-active-2').classList.remove('services-item-active-2');
            }
        }
    });
    slider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        if (target.closest('.services__arrow') === null) {
            return;
        }
        prevSlide(slide, currentSlide1, 'services-item-active-1');
        if (responsive) {
            prevSlide(slide, currentSlide2, 'services-item-active-2');
        }
        if (target.closest('.services__arrow') === document.querySelector('.services__arrow--right')) {
            currentSlide1++;
            if (responsive) {
                currentSlide2++;
            }
        } else if (target.closest('.services__arrow') === document.querySelector('.services__arrow--left')) {
            currentSlide1--;
            if (responsive) {
                currentSlide2--;
            }
        }
        if (currentSlide1 >= slide.length) {
            currentSlide1 = 0;
        }
        if (responsive) {

            if (currentSlide2 >= slide.length) {
                currentSlide2 = 0;
            }
        }
        if (currentSlide1 < 0) {
            currentSlide1 = slide.length - 1;
        }
        if (responsive) {

            if (currentSlide2 < 0) {
                currentSlide2 = slide.length - 1;
            }
        }
        nextSlide(slide, currentSlide1, 'services-item-active-1');
        if (responsive) {
            nextSlide(slide, currentSlide2, 'services-item-active-2');
        }
    });
};

export default sliderServices;
