(function($) {
    $.fn.customPhotoViewer = function() {
        this.each(function() {
            var $photo = $(this).find('.thumbnail');

            // Update main photo and active class on thumbnail click
            $photo.on('click', function(e) {
                e.preventDefault();

                // Remove 'active' class from all photo
                $photo.removeClass('active');

                // Add 'active' class to clicked thumbnail
                $(this).addClass('active');

                // Update main photo source
                var newSrc = $(this).attr('href');
                $('.main-photo').attr('src', newSrc);
            });
        });

        return this;
    };
}(jQuery));

$(function () {
    // Initialize the custom photo viewer
    $('#photo-viewer').customPhotoViewer();

    // Open Gallery Button
    $('#open-gallery').on('click', function() {
        $('#photo-viewer').show();
        $('#close-gallery').show();
        $(this).hide();
    });

    // Close Gallery Button
    $('#close-gallery').on('click', function() {
        $('#photo-viewer').hide();
        $('#open-gallery').show();
        $(this).hide();
    });
});
