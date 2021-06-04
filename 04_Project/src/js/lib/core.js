// closure callback itself function for short call
// variant 2
const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {} :: it is link to the new object - empty
    }
    // let's check - do we have an element (node)?
    if (selector.tagName) {
        this[0] = selector; // if selector is a tag we put it to the object on the first (0 offset) position
        this.length = 1;
        return this;
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