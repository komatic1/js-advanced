import './lib/lib';
import $ from './lib/lib';

/*$('button').click(function () {
    $(this).toggleClass('active'); // now this - is a HTML element (where is event) so we have
    // to change core.js lines from 7 (where we exactly wait for a selector but not for HTML document)
});*/

/*
$('button').on('click', function () {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});
*/

//console.log($('div').eq(2).find('.more'));
//console.log($('.some').closest('.findme'));
$('.findme').fadeIn(1800);