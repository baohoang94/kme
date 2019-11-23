// owl
$(document).ready(function () {
    $("#owl-home-main-banners-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: false,
        pagination: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $("#owl-home-collection-slider-fix-1").owlCarousel({
        items: 5,
        itemsDesktop: [1060, 4],
        itemsDesktopSmall: [1050, 3],
        itemsTablet: [600, 2],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $("#owl-home-collection-slider-fix-2").owlCarousel({
        items: 5,
        itemsDesktop: [1060, 4],
        itemsDesktopSmall: [1050, 3],
        itemsTablet: [600, 2],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $("#owl-home-collection-slider-fix-3").owlCarousel({
        items: 5,
        itemsDesktop: [1060, 4],
        itemsDesktopSmall: [1050, 3],
        itemsTablet: [600, 2],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $("#owl-home-collection-slider-fix-4").owlCarousel({
        items: 5,
        itemsDesktop: [1060, 4],
        itemsDesktopSmall: [1050, 3],
        itemsTablet: [600, 2],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $("#owl-home-articles-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    $("#owl-home-partners-slider").owlCarousel({
        items: 6,
        itemsDesktop: [1000, 6],
        itemsDesktopSmall: [900, 4],
        itemsTablet: [600, 2],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: 5000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    $("#related-products-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 2],
        itemsMobile: false,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
});
// menu
jQuery(document).ready(function () {
    $(".header-mobile-search > span").click(function () {
        $(".header-mobile-search .mobile-search-wrapper").toggle();
    });
    // Begin show/hide popup
    $('.btnQuickview').click(function() {
        $('#productQuickView').fadeIn();
    });
    $('#productQuickView, #close').click(function() {
        $('#productQuickView').fadeOut();
    });
    $('.modal-content').click(function(event) {
        event.stopPropagation();
    });
    // End show/hide popup
    // js in page detail
    var menu = $('.hrvproduct-tabs .tabs li');
    var menuLinks = $('.hrvproduct-tabs .tabs li a');
    var tabsContent = $('.hrvproduct-tabs .tabs-content');
    menuLinks.click(function (e) {
        e.preventDefault();
        var targetBlock = $(this).attr('href');
        menu.removeClass('active');
        $(this).parent('li').addClass('active');
        tabsContent.hide();
        $(targetBlock).fadeIn(500);
    });
    // end js detail
    // begin js for eccordion
    var acc = document.getElementsByClassName("accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		}
	}
	if($(window).width() > 769){
		$('.accordion').trigger('click');
    }
    // end js for accrordion

    $('#example').height(function (index, height) {
        return (height + 20);
    });
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#back-to-top').fadeIn(duration);
        } else {
            jQuery('#back-to-top').fadeOut(duration);
        }
    });

    jQuery('#back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
    window.onscroll = changePos;

    function changePos() {
        var fixednavbar = $(".megamenu-wrapper1 > .wrapper > .inner");
        var headerheight = $("header").height();
        var megamenu_height = $("#megamenu-mainbanners").height();

        var header = $("#header");
        var headerheight = $("#header").height();
        if (window.pageYOffset > headerheight) {
            header.addClass('sticky-header');
        } else {
            header.removeClass('sticky-header');
        }


        if (window.pageYOffset > headerheight + megamenu_height) {
            fixednavbar.addClass('index-scroll-effect');
        } else {
            fixednavbar.removeClass('index-scroll-effect');
        }

    }
    $('.megamenu-wrapper').hover(function () {
        if ($('.inner').hasClass('scroll-effect') || $('.inner').hasClass('index-scroll-effect')) {
            $('.hover-layout1').addClass('black');
        }
        $('.megamenu-body').addClass('show');
    }, function () {
        $('.hover-layout1').removeClass('black');
        $('.megamenu-body').removeClass('show');
    })
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

(function () {
    if (!$('iframe[src*=orderstrackingphone]').length) {
        return;
    }

    if (sessionStorage.getItem('tracking_phone')) {
        return;
    }

    var is_safari = navigator.userAgent.indexOf("Safari") > -1;

    if (!is_safari) {
        return;
    }

    sessionStorage.setItem('tracking_phone', 'fixsafari');

    var src = $('iframe[src*=orderstrackingphone]').attr('src');

    window.location.replace(src + '?fixsafari');

}());