jQuery(document).on( 'wbk_timeslots_rendered', function(){
    var group_count = Math.round( jQuery('.wbk-slot-button').length / 5 );
    jQuery('.wbk-slot-button').not('.wbk-slot-booked').val('Not available');
    jQuery('.wbk-slot-button').not('.wbk-slot-booked').prop('disabled', true);
    for( var i = 0; i < group_count; i++) {        
        var start = i * 5;
        var end = i * 5 + 5;     
        var has_not_available = false;
        jQuery('.wbk-slot-button').slice( start, end ).each(function() {
            if( jQuery(this).val() == 'Not available' ){
                has_not_available = true;
            }
        });
        if( has_not_available ){
            i = group_count + 1;
            jQuery('.wbk-slot-button').slice( start, end ).each(function() {
                if( jQuery(this).val() == 'Not available' ){
                    jQuery(this).val('Book');
                    jQuery(this).prop('disabled', false);
                }
            });
        }
    }  
});
