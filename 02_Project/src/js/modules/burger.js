const burger = (menuSelector, burgerSelector) => {
    const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);

    menuElem.style.display = 'none';

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block';
            console.log('if true');
        } else {
            menuElem.style.display = 'none';
            console.log('if false');
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none';
        }
    })
}

export default burger;