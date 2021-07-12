const smoothScroll = () => {
    document.addEventListener('scroll', () => {
        const elementPos = document.getElementById('offer').getBoundingClientRect().bottom;
        if (elementPos < 0) {
            document.querySelector('.smooth-scroll').style.display = 'block';
        } else {
            document.querySelector('.smooth-scroll').style.display = 'none';
        }
    });
    document.body.addEventListener('click', e => {
        const target = e.target;
        const scrollTarget = document.getElementById('header');

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        if (target.closest('.smooth-scroll') === document.querySelector('.smooth-scroll')) {
            window.scrollBy({
                top: elementPosition,
                behavior: 'smooth'
            });
        }

    });
};

export default smoothScroll;
