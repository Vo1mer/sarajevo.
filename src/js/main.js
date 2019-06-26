$(document).ready(function () {

    $('.works_filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({filter: filterValue});

    })
});
