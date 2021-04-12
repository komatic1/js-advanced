const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigimage = document.createElement('img');

    imgPopup.classList.add('.popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigimage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        // check if element supports CLICK event 
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigimage.setAttribute('src', path);
        }

        // check click on BACKGROUND of image (to close big  image)
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;