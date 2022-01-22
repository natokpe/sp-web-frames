import $ from "jquery";

$( document ).ready( function() {
    "use strict";

    const navToggle = $( '.navbar .nav-toggle' );
    const navArea = $( '.navbar .main-nav-area ' );
    const navAreaCloseBtn = $( '.navbar .main-nav-area .main-nav-area-close-btn' );

    navToggle.each( function ( i, el ) {
        $( this ).on( 'click', function ( e ) {
            e.preventDefault();
            navArea.toggleClass( 'open' );
        });
    });

    navAreaCloseBtn.each( function ( i, el ) {
        $( this ).on( 'click', function ( e ) {
            e.preventDefault();
            navArea.removeClass( 'open' );
        });
    });

    $( document ).on( 'click', function ( e ) {
        if ( ! navToggle.is( e.target )
            && navToggle.has( e.target ).length === 0 ) {
            if ( navArea.hasClass( 'open' ) )
                navArea.removeClass( 'open' );
        }
    });

    $( '.icon-nav .icon-nav-list-item .icon-nav-list-item-toggle' )
    .each( function ( i, el ) {
        const toggle = $( this );
        const item = toggle.closest( '.icon-nav-list-item' );
        // const navbar = item.closest( '.navbar' );

        toggle.on( 'click', function ( e ) {
            e.preventDefault();
            item.toggleClass( 'active' );

            // if ( item.hasClass( 'active' ) )
            //     navbar.addClass( 'item-open' );
            // else
            //     navbar.removeClass( 'item-open' );
        });

        $( document ).on( 'click', function ( e ) {
            if ( ! toggle.is( e.target )
                && toggle.has( e.target ).length === 0 ) {
                if ( item.hasClass( 'active' ) ) {
                    item.removeClass( 'active' );
                    // navbar.removeClass( 'item-open' );
                }
            }
        });
    });
});