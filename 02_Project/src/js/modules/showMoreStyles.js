import {getResource} from '../services/requests';

const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
        btn = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.style.display = 'none';
        btn.remove();
    });

    // btn.addEventListener('click', function () {
    //     getResource(SERVER_DB_HERE!)
    //         .then(res => createCards(res))
    //         .catch(error => console.log(error));
    // 
    //     this.remove(); // for use this. -> call function BUT not () => anonym (because of context)
    // });

    /*
    function createCards(response) {
        // response.forEach(({src, title, link})) - here we restruct data from item (which is object)
        response.forEach(item => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            // 1 varian - innerHTML
            // 2 create element and set attributes

            card.innerHTML = `
            <div class=styles-block>
            <img src="${item.src}" alt="style">
            <h4>${item.title}</h4>
            <a href="$${item.link}">Подробнее</a>
            </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
    */
};

export default showMoreStyles;