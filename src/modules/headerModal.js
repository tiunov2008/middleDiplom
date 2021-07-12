const headerModal = () => {
    const btnModal = document.querySelector('.button'),
        modalOverlay = document.querySelector('.overlay'),
        modal = document.querySelector('.header-modal');

    document.body.addEventListener('click', e => {
        const target = e.target;

        if (target.classList.contains('header-modal__close')) {
            e.preventDefault();
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        } else {
            const targetModal = target.closest('.button');
            if (targetModal === btnModal) {
                modal.style.display = 'block';
                modalOverlay.style.display = 'block';
            }
        }
    });
};

export default headerModal;
