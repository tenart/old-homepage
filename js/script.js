$(function() {
    $(".icon").draggable({
        containment: "body"
    });

    $(".folder").click(function() {
        $(this).toggleClass("open");
    })
})