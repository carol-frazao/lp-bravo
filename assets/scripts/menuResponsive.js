/// institucional
$('#openNav').on('click', function() {
    $('#myNav').css("height", "70%");
});

$('#closeNav').on('click', function() {
    $('#myNav').css("height", "0%");
});

// rcpm
$('#openNavRcpm').on('click', function() {
    $('#myNavRcpm').css("height", "70%");
});

$('#closeNavRcpm').on('click', function() {
    $('#myNavRcpm').css("height", "0%");
});

$('.nav-link').on('click', function() {
    $('#myNavRcpm').css("height", "0%");
})