// closure callback itself function for short call
// variant 2
const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {} :: it is link to the new object - empty
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
}
// second prototyp is which returned by line 7
$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $; // because we want to use this function in different files

/* variant 1
(() => {
    const $ = function (selector) {
        const elements = document.querySelectorAll(selector);
        const obj = {};

        obj.hide = () => {
            elements.forEach(elem => {
                elem.style.display = 'none';
            });

            return obj;
        };

        obj.show = () => {
            elements.forEach(elem => {
                elem.style.display = ''; // browser decide itself : block, flex, inline-block, grid
            });

            return obj;
        };

        return obj; //chaining for our object
    };

    window.$ = $;
})();
*/