const calc = (size, material, options, promo, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoBlock = document.querySelector(promo),
        resultBlock = document.querySelector(result);
    
    let sum = 0;
    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Please, select size and material";
        } else if (promoBlock.value === 'IWANTROPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoBlock.addEventListener('input', calcFunc);
};

export default calc;