const calc = () => {
    const calcType = document.querySelector('#calc-type'),
        calcBlock = document.querySelector('#calc'),
        calcSquare = document.querySelector('#calc-input'),
        calcTypeMaterial = document.querySelector('#calc-type-material'),
        totalValue = document.getElementById('calc-total');
    if (calcBlock) {
        calcSquare.addEventListener('input', () => {
            calcSquare.value = calcSquare.value.replace(/[^0-9]/, '');
        });
        const countSum = () => {
            let total = 0;
            if (calcTypeMaterial.value && calcType.value) {
                total = Math.ceil(calcTypeMaterial.value * calcType.value * calcSquare.value);
            }
            totalValue.value = total;
        };
        calcBlock.addEventListener('change', event => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    }
};

export default calc;
