$(document).ready(function () {
    $('.toggleclass').on('click', '.list-tag', function (e) {
        e.preventDefault();
        $(".list-content").slideUp(1000);

        if (!$(this).next().is(':visible')) {
            $(this).next().slideDown(1000);
        }
    });

    $('.tab-list').each(function () {
        let $this = $(this);
        $this.on('click', '.tab', function (e) {
            e.preventDefault();
            let $currentLink = $(this);
            let $currentTab = $currentLink.parent();
            let currentId = this.hash;

            if (currentId && !$currentTab.is('.active')) {
                let $oldActiveTab = $this.find('li.active');
                let $oldSelector = $oldActiveTab.find('a').attr('href');
                let $oldContent = $($oldSelector);

                $oldContent.removeClass('active');
                $oldActiveTab.removeClass('active');

                $(currentId).addClass('active');
                $currentTab.addClass('active');
            }
        });
    });
});
 