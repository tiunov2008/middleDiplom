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
    document.body.addEventListener('mouseout', e => {
        const target = e.target;
        if (target.closest('.document') !== null) {
            const targetModal = target.closest('.document');
            if (targetModal.classList.contains('document')) {
                target.style.opacity = '0';
            }
        }
    });
    const showModal = src => {
        const div = document.createElement('div');
        div.className = 'modal_documents';
        div.innerHTML = `
    <img src="${src}" style=" height: 90%;
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) !important;">`;
        document.body.append(div);
        document.querySelector('.overlay').style.display = 'block';
    };
    const closeModal = () => {
        document.querySelector('.modal_documents').remove();
        document.querySelector('.overlay').style.display = 'none';
    };
    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.document') !== null) {
            const targetModal = target.closest('.document');
            if (targetModal.classList.contains('document')) {
                showModal(target.previousElementSibling.src);
            }
        }
        if (target === document.querySelector('.overlay')) {
            closeModal();
        }
    });
};

export default documents;
