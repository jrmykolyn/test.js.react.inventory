// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var colors = [ 'firebrick', 'tomato', '#fbe64c', 'palegreen', 'mediumspringgreen' ];


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class Item extends React.Component {
    constructor() {
        super();
    }


    render() {
        var styles = {
            backgroundColor: this.getBgColor( this.props.data.durability )
        };

        return (
            <article className="item" style={ styles } onClick={ ( e ) => { this.triggerModalWithData(); } }>
                <p>{ this.props.data.name || 'Fallback' }</p>
            </article>
        );
    }


    getBgColor( durability ) {
        console.log( 'INSIDE `getBgColor()`' ); /// TEMP
        console.log( durability ); /// TEMP

        if ( !durability || typeof durability !== 'number' ) {
            return '';
        }

        return ( colors[ durability - 1 ] ) ? colors[ durability - 1 ] : '';
    }


    triggerModalWithData() {
        this.props.triggerModal.call( null, this.props.data );
    }
} // /Item


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Item;
