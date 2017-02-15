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
                <p>{ this.props.data.name || 'Fallback' }</p>
            </article>
        );
    }


    triggerModalWithData() {
        this.props.triggerModal.call( null, this.props.data );
    }
} // /Item


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Item;
