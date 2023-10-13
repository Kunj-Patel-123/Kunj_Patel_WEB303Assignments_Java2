// WEB303 Assignment 2
// Name : Kunj Patel
// SNum : 0828761
// Date : 2023-09-23

$(document).ready(function () {
    // Click event handlers for the three links
    $("#prospect").click(function () {
      loadContent("prospect.html");
    });
  
    $("#convert").click(function () {
      loadContent("convert.html");
    });
  
    $("#retain").click(function () {
      loadContent("retain.html");
    });
  
    // Function to load content using AJAX
    function loadContent(contentFile) {
      $.ajax({
        url: contentFile,
        type: "GET",
        dataType: "html",
        success: function (data) {
          // Animation to hide and show the content
          $("#content").fadeOut(400, function () {
            // Update the content and fadeIn
            $("#content").html(data).fadeIn();
          });
        },
        error: function () {
          alert("Failed to load content.");
        },
      });
    }
  });
  
