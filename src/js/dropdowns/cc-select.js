import $ from "jquery";
import countryCodes from '../country-codes.js';

$( document ).ready( function() {
    "use strict";

    /**
     * Country Code dropdown select
     */
    $( '.cc-dropdown' ).each( function ( i, e ) {
        const ddown = $( this );

        const ins = $( '<div class="cc-dropdown-btn" tabindex="0">'
        +       '<div class="cc-dropdown-label"></div>'
        +       '<div class="cc-dropdown-code"></div>'
        +       '<span class="cc-dropdown-arrow fa fa-chevron-down"></span>'
        +   '</div>'
        +   '<div class="cc-dropdown-list"></div>' );

        ddown.append( ins );

        const ddownBtn = ddown.find( '.cc-dropdown-btn' );
        const ddownLabel = ddown.find( '.cc-dropdown-label' );
        const ddownCode = ddown.find( '.cc-dropdown-code' );
        const ddownList = ddown.find( '.cc-dropdown-list' );

        ddownBtn.on( 'click', function ( e ) {
            e.preventDefault();
            ddown.toggleClass( 'open' );
        });

        $( document ).on( 'click', function ( e ) {
            if ( ! ddownBtn.is( e.target )
                && ddownBtn.has( e.target ).length === 0 ) {
                ddown.removeClass( 'open' );
            }
        });

        $.each( countryCodes(), function ( i, e ) {
            ddownList.append( $( '<label tabindex="0" '
                +     'class="cc-dropdown-list-item" title="'
                +     e.name + ' (' + e.dial_code + ')' + '">'
                +     '<span class="cc-dropdown-list-item-name">'
                +          e.name
                +     '</span>'
                +     ' '
                +     '<span class="cc-dropdown-list-item-code">+'
                +          e.dial_code
                +     '</span>'
                +     '<input type="radio" name="dial_code" value="'
                +     e.dial_code + '" data-cc-name="'
                +     e.name + '" data-cc-dial_code="' + e.dial_code + '" />'
                + '</label>'
            ) );
        });

        const ddownFields = ddown
        .find( '.cc-dropdown-list-item input[type=radio]' );

        ddownFields.each( function ( i, e ) {
            const field = $( this );

            field.on( 'change', function ( e ) {
                if ( $( this ).is( ":checked" ) ) {
                    var lb = $( this ).attr( 'data-cc-name' );
                    var cd = $( this ).attr( 'data-cc-dial_code' );

                    ddownList.find( '.cc-dropdown-list-item.selected' )
                    .removeClass( 'selected' );

                    ddownLabel.empty().html( lb );
                    ddownCode.empty().html( '+' + cd );
                    ddownBtn.attr( 'title', lb + ' (+' + cd + ')' );

                    $( this ).closest( '.cc-dropdown-list-item' )
                    .addClass( 'selected' );
                }
            });
        });

        const ddownChField = ddown
        .find( '.cc-dropdown-list-item input[type=radio]:checked' );
        var def = null;

        if ( ddownChField.length ) {
            def = ddownChField;
        } else {
            let attr = ddown.attr( 'data-default' );

            if ( typeof attr !== 'undefined' && attr !== false ) {
                let fld = ddown.find( '.cc-dropdown-list-item input[value=' +
                ddown.attr( 'data-default' ) + ']' );

                if ( fld.length )
                    def = fld;
            }
        }

        if ( def === null )
            def = ddown.find( '.cc-dropdown-list-item input[value="63"]' );

        let lb = def.attr( 'data-cc-name' );
        let cd = def.attr( 'data-cc-dial_code' );

        ddownList.find( '.cc-dropdown-list-item.selected' )
        .removeClass( 'selected' );

        ddownLabel.empty().html( lb );
        ddownCode.empty().html( '+' + cd );
        ddownBtn.attr( 'title', lb + ' (+' + cd + ')' );

        def.closest( '.cc-dropdown-list-item' )
        .addClass( 'selected' );

        // def.closest( '.cc-dropdown-list-item' ).scrollIntoView();
    });

});