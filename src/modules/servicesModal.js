const servicesModal = () => {
    const modalOverlay = document.querySelector('.overlay'),
        modal = document.querySelector('.services-modal');

    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target.classList.contains('services-modal__close')) {
            e.preventDefault();
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        } else if (target.closest('.service-button') !== null) {
            const targetModal = target.closest('.service-button');
            if (targetModal.classList.contains('service-button')) {
                modal.style.display = 'block';
                modalOverlay.style.display = 'block';
            }
        }
    });

};

export default servicesModal;
