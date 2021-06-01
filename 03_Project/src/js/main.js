import VideoPlayer from './modules/playVideo';
import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
//import Form from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init()

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    // alternative call style
    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    //new Form('.form').init();
});