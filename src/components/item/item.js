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
            <article className="item">
                <p>{ this.props.name || 'Fallback' }</p>
            </article>
        );
    }
} // /Inventory


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Item;
