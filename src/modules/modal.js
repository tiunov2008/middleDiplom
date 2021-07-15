const modal = (modalSelector, btnSelector) => {
    const modalOverlay = document.querySelector('.overlay'),
        modal = document.querySelector('.' + modalSelector);

    document.body.addEventListener('click', e => {
        const target = e.target;

        if (target.classList.contains(modalSelector + '__close')) {
            e.preventDefault();
            modal.style.display = 'none';
            modalOverlay.style.display = 'none';
        } else if (target.closest('.' + btnSelector) !== null) {
            const targetModal = target.closest('.' + btnSelector);
            if (targetModal.classList.contains(btnSelector)) {
                modal.style.display = 'block';
                modalOverlay.style.display = 'block';
            }
        }
    });
};

export default modal;
