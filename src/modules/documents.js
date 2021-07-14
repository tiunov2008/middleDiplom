const documents = () => {
    document.body.addEventListener('mouseover', e => {
        const target = e.target;
        if (target.closest('.document') !== null) {
            const targetModal = target.closest('.document');
            if (targetModal.classList.contains('document')) {
                target.style.opacity = '1';
            }
        }
    });
    const elements = [...document.querySelector('.img-responsive')];
    document.body.addEventListener('mouseout', e => {
        const target = e.target;
        if (target.closest('.document') !== null) {
            const targetModal = target.closest('.document');
            if (targetModal.classList.contains('document')) {
                target.style.opacity = '0';
            }
        }
    });
};

export default documents;
