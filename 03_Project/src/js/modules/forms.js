export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.inputs = document.querySelectorAll('input');
        this.message = {
            loading: 'Loading...',
            success: 'Thanks! We will contact you soon!',
            failure: 'Something were wrong...'
        };
        this.path = 'assets/question.php';
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }

    checkMailInputs() {
        const mailInputs = document.querySelectorAll('[type="email"]');

        mailInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }

    phoneMask() {
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
            let matrix = '+1 (___) ___-____',
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
    
        let inputs = document.querySelectorAll('[name="phone"]');
    
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        })
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    init() {
        this.checkMailInputs();
        this.phoneMask();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                // бэптики
                statusMessage.style.cssText = `
                margin-top:1em;
                font-size:1.5em;
                color:#909090;
                `;
                form.parentNode.appendChild(statusMessage);

                statusMessage.textContent = this.message.loading;

                const formData = new FormData(form);
                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = this.message.failure;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 4000);
                    });
            });
        });
    }
}