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
            <p>{ this.props.name || 'Fallback' }</p>
        );
    }
} // /Inventory


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Item;
