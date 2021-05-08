//import checkNumInputs from './checkNumInputs';

const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');

    //checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Loading',
        success: 'Thank you! we contact to you soon',
        failure: 'Somethig wrong...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    // paths to send different types of message to server
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    // send request using Fetch
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        });
        // clear images (files)
        upload.forEach(item => {
            item.previousElementSibling.textContent = "File not selected";
        });
    };

    // lets get file name to display
    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            const arr = item.files[0].name.split('.');
            // fljskljdflsdkjfsdlfjsd.png => [0 => 'fljskljdflsdkjfsdlfjsd', 1 => 'png']
            //item.files[0].name.split('.')[0].length > 8 ? dots = "..." : dots = ".";
            //const name = item.files[0].name.split('.')[0].substring(0, 8) + dots + item.files[0].name.split('.')[1];

            arr[0].length > 8 ? dots = "..." : dots = ".";
            const name = arr[0].substring(0, 8) + dots + arr[1];
            // render name
            item.previousElementSibling.textContent = name;
        })
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            // but it is not remove element from the screen - only hide
            setTimeout(() => {
                item.style.display = 'none';
            }, 400); // that's why we made display=none

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);


            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            // get form what we send
            // and closest element with class; if it exists (true)
            // - send to designer
            // - to question
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer: api = path.question;

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    // change image and text
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    textMessage.textContent = message.failure;
                    statusImg.setAttribute('src', message.fail);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        // show form after img remove
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 3 * 1000);
                });
        });
    });
};

export default forms;