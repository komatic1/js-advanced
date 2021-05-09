const mask = (selector) => {
    

    let setCursorPosition = (pos, elem) => {
        // manually set focus on element
        elem.focus();
        // for an old browser
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true); // join first and last position
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select(); // set cursor and select from parameters start & end
        }
    };

    function createMask(event) {
        // template
        let matrix = '+3 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),  // we replace here NOT digits to EMPTY string
            val = this.value.replace(/\D/g, ''); // using THIS we get context of element with event

        // if user delete something from matrix we will not allow it
        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) { //a - only variable: all symbols from string matrix
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    })
};

export default mask;