/*we are here dear lord*/

jQuery.noConflict();
jQuery(document).ready(function($) {
    // Code that uses jQuery's $ can follow here.
    if($(".cms-index-index").length > 0) {
        $('.cms-index-index .main .std div').has('img').addClass('home-slide').append("<div class='slide-info'></div>");
        $('.cms-index-index .main .std').cycle({
            fx: 'fade',
            speed: 2000,
            timeout: 10000,
            slideExpr: '.home-slide',
            before: onBefore,
            pause: 1
        });


        $('.cms-index-index .main .std').cycle('pause');

        $('#home_cta').before('<a class="slide-prev slider-btn"></a><a class="slide-next slider-btn"></a>').cycle({
            fx: 'scrollHorz',
            speed: 1500,
            timeout: 7000,
            slideExpr: '.cta-group',
            prev:    'a.slide-prev',
            next:    'a.slide-next',
            manualTrump: true
        });
    }
//_________ /cycle _________\\
    $('.trans').css('opacity', 0.6);
//_________ /general opacity _________\\
    $('#nav li.level-top').hoverIntent(config);
    $('#nav a.level-top').not('#nav li.nav-4 a.level-top, #nav li.nav-8 a.level-top, #nav li.nav-7 a.level-top').click(function() { return false; });
    //#nav li.nav-4 a.level-top,
    // CT Schubert - 04-15-14 - Disable clearance clickable in nav. Re-add line above to code above it inside of not()
    // Also find and remove CSS in styles.css that changes mouse cursor
    //$('#nav li.nav-4 a.level-top').click(function() { return false; });
    $('#nav li.nav-4 a.level-top').click(function(event){
        event.preventDefault();
    });


    $('#nav li.level-top').find('ul.level0:visible').prev('a').addClass('open');
    var navItem = $('#nav ul.level0 > li'),
        itemCount = navItem.length;
        navItem.addClass('width-'+itemCount);
//__________ Clone the nav items that need to be moved around _____________\\
	$('#nav li.nav-5-2').clone().appendTo('#nav li.nav-5 ul.level0:nth-child(2)').addClass('nav-5-2-clone');
	$('#nav li.nav-5-3').appendTo('#nav li.nav-5 ul.level0:nth-child(2)');
    $('#features').find('.feature:nth-child(2)').addClass('middle').css('margin','0 12px');
//_________ /feature classer _________\\
    $('#linkBox').appendTo('li.quick-links');
    $('li.quick-links').hover(
        function () { $('#linkBox').slideDown(100); },
        function () { $('#linkBox').slideUp(500); }
    );

    $('li.quick-links a.trigger').on('click', function(e){
        e.preventDefault();
    });
//------ /quicklinks------\\
    $('a.pop-trigger').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "fast");
        $(this).next('div.pop-up').slideToggle(300);
    });

    $('a.pop-close').on('click', function(e){
        e.preventDefault();
        $(this).parent().slideToggle(300);
    });
    //------ /pop-trigger/modal ------\\
    $("a.product-thumb").on('click', function(e){
        e.preventDefault();
        var productClasses = $(this).attr("class").split(/\s/), productID = productClasses[productClasses.length -1].match(/\d+/);

        if($('.cycle-' + productID)){
            $('.cycle-' + productID).after('<ul class="product-image-nav">').cycle({
                fx: 'fade',
                speed: 500,
                timeout: 0,
                pager:  '.product-image-nav',
                pagerAnchorBuilder: function(idx, slide) {
                    return '<li><a href="#" title="click to see larger image"><img src="' + slide.src + '" width="65" height="65" /></a></li>';
                }
            });
        }
        $(this).next('div.modal-product').modal({
            opacity:65,
            overlayCss: {backgroundColor:"#efefef"},
            overlayClose:true,
            onShow: function (dialog) {
                dialog.container.css("height", "auto");
            },
            onClose: function (){
                $.modal.close();
                $('.cycle-' + productID).cycle('destroy');
                $('.product-image-nav').remove();
            }
        });
    });

    $("a.product-link").on('click', function(e){
        e.preventDefault();
        var productClasses = $(this).attr("class").split(/\s/), productID = productClasses[productClasses.length -1].match(/\d+/);

        if($('.cycle-' + productID)){
            $('.cycle-' + productID).after('<ul class="product-image-nav">').cycle({
                fx: 'fade',
                speed: 500,
                timeout: 0,
                pager:  '.product-image-nav',
                pagerAnchorBuilder: function(idx, slide) {
                    return '<li><a href="#" title="click to see larger image"><img src="' + slide.src + '" width="65" height="65" /></a></li>';
                }
            });
        } // if product images
        $(this).parent().siblings('.productImage').children('div.modal-product').modal({
            opacity:65,
            overlayCss: {backgroundColor:"#efefef"},
            overlayClose:true,
            onShow: function (dialog) {
                dialog.container.css("height", "auto");
        },
            onClose: function (){
                $.modal.close();
                $('.cycle-' + productID).cycle('destroy');
                $('.product-image-nav').remove();
            }
        });
    });
//------ / modal / product images ------\\
    $('.tableToggle').on('click', function(e){
        $('#skuTableWrapper').slideToggle('slow');
        $('.tableToggle a').toggleClass('on');
        e.preventDefault();
    });
//------ /table-trigger------\\
    var activeLink = $('.cms-page-view h1').html();
    var section = 0;

    if(activeLink){
        activeLink = activeLink.replace(" ","-");
        activeLink = activeLink.replace("Rapha&euml;l","Raphael");
    }

    if(activeLink == 'Sennelier') {
        section = 0;
    }

    if (activeLink == 'Isabey' || activeLink == 'Lascaux' || activeLink == 'Lama-Li') {
        section = 1;
    }
//------ /page title fixer ------\\

    if ($('li.timeline a.' + activeLink)) {
        $('li.timeline a.' + activeLink).parent().addClass('activeLink');
    }

    $('#timelineWrapper').cycle({
        timeout: 0,
        prev: "#prev",
        next: "#next",
        fx: 'scrollHorz',
        manualTrump: true,
        startingSlide: section,
        nowrap: 1,
        slideExpr: '.timelineSection',
        after: onAfter
    });

    // Selectnox style change
    $(".sort-by-pulldown select").selectbox({

    });

    var spans = $(".amcustomerattr > .field-row");
    for(var i = 0; i < spans.length; i+=3) {
      spans.slice(i, i+3).wrapAll("<div class='form-group'></div>");
    }
//------ /customer attributes columnizer ------\\
// ecoqua contest
if($('.cms-ecoqua-fabriano').length > 0){
    $(".contest-box-content.instagram ").append('<ul/>');
    $(function() {
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "https://api.instagram.com/v1/tags/myecoqua/media/recent?client_id=5ba95f6f40fd469db7522e4b62b17163",
            success: function(data) {
                for (var i = 0; i < 18; i++) {
                    $(".contest-box-content.instagram ul").append("<li><a href='"+ data.data[i].link +"' target='_blank'><img class='instagram-image' width='149' src='" + data.data[i].images.low_resolution.url +"' /></a></li>");
                }
                $('.contest-box-content.instagram ul li:nth-child(6n+1)').addClass('insta-row');
            }
        });
    });

    var allPanels = $('.accordion > .target').hide();
    
    $(".accordion .trigger").on('click', function(e){
        // if ($(this).hasClass('active')) {
        //     e.preventDefault();
        // }
        allPanels.slideUp().prev('.trigger').removeClass('active');
        $(this).addClass('active').next('.target').slideDown('400', function(){
            google.maps.event.trigger(map, 'resize');
        });
    });

    $('a.participate').on('click', function(e){
        e.preventDefault();
        allPanels.slideUp().prev('.trigger').removeClass('active');
        $('.target.participate').slideDown().prev('.trigger').addClass('active');
        var po = $('.target.participate').prev('.trigger').offset().top;
        $("html, body").animate({ scrollTop: po }, "slow");
    });

    $(".contest-detail-trigger").on('click', function(e){
        e.preventDefault();
        $('#contest_details').modal({
            opacity:65,
            overlayCss: {backgroundColor:"#efefef"},
            overlayClose:true,
            onShow: function (dialog) {
                dialog.container.css("height", "auto");
            },
            onClose: function (){
                $.modal.close();
            }
        });
    });
}
//  end ecoqua
});
//_________ /doc ready [no jquery can go out of this function] _________\\
function onBefore() {
    var slide = jQuery(this), slideInfo = jQuery('.slide-info'), slideTitle = slide.children('h1'), slideDesc = slide.children('p');
    slideTitle.fadeIn(1000, function(){
        slideTitle.delay(9000).fadeOut();
    });
    slideDesc.delay(1000).fadeIn(1000, function(){
        slideDesc.delay(8500).fadeOut();
    });
}
function onAfter(curr, next, opts) {
    var slideNum = opts.currSlide + 1;
    var slideTotal = opts.slideCount;
    ((slideNum - 1) === 0) ? jQuery('#prev').hide() : jQuery('#prev').show();
    (slideNum == slideTotal) ? jQuery('#next').hide() : jQuery('#next').show();
}

var config = {
    over: slideDown,
    timeout: 400,
    out: slideUp,
    sensitivity: 5,
    interval: 300
};

function slideDown(){  jQuery(this).children('ul.level0').toggleClass('open').slideToggle(300); }
function slideUp(){ jQuery(this).children('ul.level0').toggleClass('open').slideToggle(300); }
