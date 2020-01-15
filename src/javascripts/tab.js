$('#rmsp ul li').on('click', function () {
    $(this)
        .addClass('active')
        .siblings('')
        .removeClass('active');
    $('#rmsp div')
    
        .eq($(this).index())
        .show()
        .siblings('div')
        .hide();
});

$('#rxph ul li').on('click', function () {
    $(this)
        .addClass('active')
        .siblings('')
        .removeClass('active');
    $('#rxph div a img')
        .eq($(this).index())
        .show()
        .siblings('#rxph div a img)')
        .hide();
});