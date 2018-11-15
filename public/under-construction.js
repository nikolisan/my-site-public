$(document).ready(function() {
    $("#continue-btn").click(function() {
        $("#under-construction").animate({
            opacity: 0
        }, "500ms", "swing", function() {
            $("#under-construction").addClass("hide");
        });
    });
});