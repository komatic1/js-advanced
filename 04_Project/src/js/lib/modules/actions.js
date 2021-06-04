import $ from '../core';

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) {
    const swap = this[i]; // get element from the param
    // we cant use this.length - because it's show QUANTITY of elements but not the QUNTITY of properties
    const objLength = Object.keys(this).length; // quantity of properties 1) transform object to array and get length
    for (let i = 0; i < objLength; i++) {
        delete this[i]; // here we cleaning object but don't remove it - because of chain call
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

$.prototype.index = function() {
    const parent = this[0].parentNode; // get parent for the item
    const childs = [...parent.children]; // get children but it is collection, so turn it
    //
    // in childs we have an arrya, on each we run findIndex
    // so we get each item and will return only one which we need
    const findMyIndex = (item) => {
        return item == this[0];
    }

    return childs.findIndex(findMyIndex);
};

$.prototype.find = function(selector) {
    let numberOfItems = 0; // total
    let counter = 0; // written elements
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            // no elements by selector
            continue;
        }
        // overwrite elmenets with order
        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;
    // here we will remove old elements from the this
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector)) {
            this[i] = this[i].closest(selector);
            counter++;
        }
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function() {
    let numberOfItems = 0; // total
    let counter = 0; // written elements
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;
        
        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};