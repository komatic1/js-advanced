import './lib/lib';
import $ from './lib/lib';

$('button').click(function () {
    $(this).toggleClass('active'); // now this - is a HTML element (where is event) so we have
    // to change core.js lines from 7 (where we exactly wait for a selector but not for HTML document)
});
