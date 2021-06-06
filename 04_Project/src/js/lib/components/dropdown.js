import $ from '../core';

$.prototype.dropdown = function() {
    // for each element with dropdown
    for (let i = 0; i < this.length; i++) {
        // get attribute of button
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};
// initialize at once html with .dropdown class
$('.dropdown-toggle').dropdown();