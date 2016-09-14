
$(function () {
   
    // all inputs in a form
    var inputsList = $('form input');

    var tooltip;

    $(inputsList).hover(
        function () {

            $('.tooltip').remove();
        
            tooltip = $(this).attr('message');

            // remove message attribute
            $(this).removeAttr('message');

            // tooltip on the right from the input
            $('<a class=' + 'tooltip'+ '>' + tooltip + '</a>').insertAfter(this);
        
        },
        function () {
            // restore message attribute
            $(this).attr('message', tooltip);

            // remove tooltip
            $('.tooltip').remove();
    });

    $('.help').on('click', function () {
        
        $('.tooltip').remove();
        // add tooltips after click
        inputsList.each(function () {
            tooltip = $(this).attr('message');
            $('<a class=' + 'tooltip' + '>' + tooltip + '</a>').insertAfter(this);
        });
    });
});