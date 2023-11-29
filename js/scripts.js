$(document).ready(function() {
    $(".color-3").click(function() {
        var modelViewer = $("#reveal");
        var newSrc = "../models/Chair-white.glb"; 
        modelViewer.attr("src", newSrc);
    });
});

$(document).ready(function() {
    $(".color-1").click(function() {
        var modelViewer = $("#reveal");
        var newSrc = "../models/Chair-orange.glb"; 
        modelViewer.attr("src", newSrc);
    });
});

$(document).ready(function() {
    $(".color-4").click(function() {
        var modelViewer = $("#reveal");
        var newSrc = "../models/Chairyellow.glb"; 
        modelViewer.attr("src", newSrc);
    });
});