const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    const element = document.documentElement,
        body = document.body;
    
    const calcScroll = () => {
        upElem.addEventListener('click', function() {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            // compare if we have #url in URL address
            if (this.hash !== '') {
                event.preventDefault();
                // get element header
                //let hashElement = document.getElementById(this.hash.substring(1));
                // 2nd variant
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;
                
                // get px to scroll
                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;
        
        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrolltop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    };

    calcScroll();
};

export default scrolling;