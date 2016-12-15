


$(document).ready(function(){
// get rid of widows
    $('p, h2, h4, ul li').each(function() {
        $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
    });

    var heroImage = $('.hero-top');
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var randomClass = 'hero-top-' + randomNumber;

    $(heroImage).addClass(randomClass);

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $('.swatch').on('click', function(){

        $('.swatch').each(function(){
            $(this).html('');
        });

        var colorId = $(this).data('colorid');
        var thisHtml = $(this).html();

        var thisHtmlLen = thisHtml.length;

        if ($(this).hasClass('active') == true){
            $(this).html('');
            $('.swatch').each(function(){
                $(this).removeClass('active');
            });
        } else {
            $(this).html('<div class="swatch-tt"><div class="arrow-box swatch-' + colorId + '-over"></div></div>');
            $('.swatch-tt').fadeIn();
            $(this).addClass('active');
        }

    });

    $('#button-swatches').click(function(){
        $('#container-swatches').fadeToggle();

    });

});
