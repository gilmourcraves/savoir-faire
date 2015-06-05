


$(document).ready(function(){
// get rid of widows
    $('p, h2, h4, ul li').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
    });

});
