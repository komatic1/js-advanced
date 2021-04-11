const tabs = (headerSelector, tagSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelector(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    };

    function showTabContent(i = 0) {
        content[i].style.display = 'block';

        tab[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target; // where user click - element

        if (target.classList.contains(tabSelector.replace(/\./, '')) 
        || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, index) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    })
};

export default tabs;