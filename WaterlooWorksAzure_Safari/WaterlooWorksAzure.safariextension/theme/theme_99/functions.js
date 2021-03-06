function startTheme() {
    // hide side bar
    if (currURL.match(/\/coop-postings\.htm/) || currURL.match(/\/jobs-postings\.htm/)) {
        if ($('#postingsTablePlaceholder').length) {

            var hideBtn;
            if (getCookie('azure-sidebar-visibility') == '0') {
                $('body').addClass('azure-full-width');
                hideBtn = $('<div class="azure-hide-sidebar" id="azure-hide-sidebar"><i class="icon-angle-right"></i></div>');
            } else {
                hideBtn = $('<div class="azure-hide-sidebar" id="azure-hide-sidebar"><i class="icon-angle-left"></i></div>');
            }

            hideBtn.on('click', function (e) {
                e.preventDefault();
                var body = $('body');
                var icon = $(this).children('i');
                $('.bs--hide__column').removeAttr('style');
                if (body.hasClass('azure-full-width')) {
                    icon.addClass('icon-angle-left').removeClass('icon-angle-right');
                    setCookie('azure-sidebar-visibility', '1');
                } else {
                    icon.removeClass('icon-angle-left').addClass('icon-angle-right');
                    setCookie('azure-sidebar-visibility', '0');
                }
                body.toggleClass('azure-full-width');
                fixTableHeader($('#postingsTable'));
            });
            $('.bs--hide__column').before(hideBtn);

        }
    }
}

setTimeout(startTheme, 5);