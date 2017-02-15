// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class Item extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <article className="item" onClick={ ( e ) => { this.triggerModalWithData(); } }>
                <p>{ this.props.name || 'Fallback' }</p>
            </article>
        );
    }


    triggerModalWithData() {
        this.props.triggerModal.call( null, this );
    }
} // /Item


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Item;
