const drop = () => {
    // there is 8 events
    /*
    drag *
    dragend * 
    dragenter объект над dropArea
    dragexit *
    dragleave объект за пределами dropArea
    dragover объект над dropArea
    dragstart *
    drop объект отправлен в dropArea

    with * - event for the dragged element - not for our task
    */

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function hightlight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0,.7)';
    }

    function unhightlight(item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = '#ededed';
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => hightlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhightlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 8 ? dots = "..." : dots = ".";
            const name = arr[0].substring(0, 8) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;