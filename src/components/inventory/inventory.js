// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );

import Item from '../item/item.js';

// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class Inventory extends React.Component {
    constructor() {
        super();
    }


    render() {
        var items = this.props.items || [];
        var itemComponents = [];

        items.forEach( ( item, i ) => {
            itemComponents.push(<Item name={item.name} key={ i } />);
        } );

        return (
            <section>
                <div className="inventory-header">
                    <h2>Inventory</h2>
                </div>
                <div className="inventory-body">
                    { itemComponents }
                </div>
            </section>
        );
    }
} // /Inventory


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Inventory;
