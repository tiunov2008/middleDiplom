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
    <div style=" height: 90%;
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) !important;">
        <img src="${src}" style=" height: 90%;">
        <span style=" width: 20px; height: 20px; font-size: 30px; color: #fff; cursor: pointer;
        position: fixed; top: 0; right: 0;" title="Close" class="documents-modal__close">x</span>
    </div>`;
        document.body.append(div);
        document.querySelector('.overlay2').style.display = 'block';
    };
    const closeModal = () => {
        document.querySelector('.modal_documents').remove();
        document.querySelector('.overlay2').style.display = 'none';
    };
    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.document-overlay') !== null) {
            showModal(target.previousElementSibling.src);
        }

        if (target === document.querySelector('.overlay2') ||
        target === document.querySelector('.documents-modal__close')) {
            closeModal();
        }
    });
};

export default documents;
