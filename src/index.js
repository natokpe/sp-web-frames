import $ from "jquery";

$( document ).ready( function() {
    "use strict";

    /**
     * Password Input
     */
    $( ".form-group.text input[type=password]" ).each( function ( i, e )
    {
        const field = $( this );
        const group = field.closest( '.form-group.text' );

        const toggle = $( '<div class="pass-toggle">' +
                         '<span class="fa fa-eye"></span></div>' );
        const toggleIcon = toggle.find( '.fa' );

        field.after( toggle );

        toggle.on( 'click', function ( e ) {
            e.preventDefault();
            e.stopPropagation();

            if ( field.attr( 'type' ) == 'password' ) {
                field.attr( 'type', 'text' ).css( 'paddingRight', '45px' );
                toggleIcon.removeClass( 'fa-eye' ).addClass( 'fa-eye-slash' );
            } else {
                field.attr( 'type', 'password' );
                toggleIcon.removeClass( 'fa-eye-slash' ).addClass( 'fa-eye' );
            }
        });
    });

});