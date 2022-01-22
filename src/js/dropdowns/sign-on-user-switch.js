import $ from "jquery";

$( document ).ready( function() {
    "use strict";

    /**
     * Sign-on User Switch
     */
    $( '.sign-on-user-switch' ).each( function ( i, e ) {

        const swch = $( this );

        const ins = $( '<div class="switch-dropdown">'
        +   '<label>'
        +       '<span class="switch-dropdown-label">'
        +           '<span class="client-set">I need an Artisan</span>'
        +           '<span class="artisan-set">I\'m an Artisan</span>'
        +       '</span>'
        +       '<input type="checkbox" name="user_client" checked="checked" />'
        +   '</label>'
        +   '<div class="switch-dropdown-button">'
        +       '<span class="client-set">I need an Artisan</span>'
        +       '<span class="artisan-set">I\'m an Artisan</span> '
        +       '<span class="fa fa-chevron-down"></span>'
        +   '</div>'
        +'</div>' );

        const field = ins.find( 'label input[type=checkbox]' );
        const switchBtn = ins.find( '.switch-dropdown-button' );

        field.on( 'change', function ( e ) {
            if ( $( this ).is( ":checked" ) ) {
                swch.removeClass( 'artisan' ).addClass( 'client' );
            } else {
                swch.removeClass( 'client' ).addClass( 'artisan' );
            }
        });

        $( document ).on( 'click', function ( e ) {
            if ( ! switchBtn.is( e.target )
                && switchBtn.has( e.target ).length === 0 ) {
                swch.removeClass( 'open' );
            }
        });

        switchBtn.on( 'click', function ( e ) {
            e.preventDefault();

            swch.toggleClass( 'open' );
        });

        swch.append( ins );
    });

});