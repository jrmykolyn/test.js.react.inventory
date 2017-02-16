// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );

import { items } from '../data/data.js';

import Inventory from '../components/inventory/inventory.js';
import Modal from '../components/modal/modal.js';
import ItemForm from '../components/item-form/item-form.js';


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class App extends React.Component {
    constructor() {
        super(); /// TODO[@jrmykolyn] - Look into why `super()` call is required.
        this.state = {
            activeItem: items[ 0 ],
            items: items
        };
    }


    render() {
        return (
            <div>
                <ItemForm addItem={ this.addItem.bind( this ) }/>
                <Inventory items={ this.state.items } triggerModal={ this.triggerModal.bind( this ) } />
                <Modal data={ this.state.activeItem }/>
            </div>
        );
    }


    triggerModal( data ) {
        if ( data.id !== this.state.activeItem.id ) {
            this.setState( { activeItem: data } );
        } else {
            console.log( 'Whoops, looks like that Item has already been selected!' );
        }
    }


    handleModal( data ) {
        /// TODO[@jrmykolyn] - Toggle 'Modal' display state.
    }

    addItem( item ) {
        console.log( 'INSIDE `addItem`' ); /// TEMP

        var items = this.state.items;
        items.push( item );

        this.setState( { items: items } );
    }


    componentWillMount() {

    }
} // /App


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default App;
