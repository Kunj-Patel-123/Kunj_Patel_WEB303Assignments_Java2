(function($) {
    $.fn.customPhotoViewer = function() {
        this.each(function() {
            var $photo = $(this).find('.thumbnail');

            // Update main photo on thumbnail click
            $photo.on('click', function(e) {
                e.preventDefault();
                var newSrc = $(this).attr('href');
                $('.main-photo').attr('src', newSrc);
            });
        });

        return this;
    };
}(jQuery));
