$(document).on('ready', function (e) {

    $('[data-open-sidebar]').on('click', function (e) {

        e.preventDefault();

        var $body = $('body');
        var sidebar = $(this).data().openSidebar;
        var className = 'sidebar-' + sidebar + '-open';

        if ($body.hasClass(className)) {
            $body.removeClass(className);
        } else {
            $body.addClass(className);
        }

    });

});