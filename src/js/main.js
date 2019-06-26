$(document).ready(function () {

    $('.header_menu-item').on('click', 'a', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });


    $('.works_filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({filter: filterValue});

    });

    var a = 0;
    $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },
                    {
                        duration: 7000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });
            a = 1;
        }
    });



});
