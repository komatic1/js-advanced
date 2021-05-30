const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(itemsSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                // 80 - it is padding from css
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = 0;
            }
        });
    });


    /*
    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
            }
        });
    });
    */
};

export default accordion;