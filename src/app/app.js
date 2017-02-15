// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );

import { items } from '../data/data.js';

import Inventory from '../components/inventory/inventory.js';
import Modal from '../components/modal/modal.js';


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class App extends React.Component {
    constructor() {
        super(); /// TODO[@jrmykolyn] - Look into why `super()` call is required.
        this.state = {
            activeItem: items[ 0 ]
        };
    }


    render() {
        return (
            <div>
                <Inventory items={ items } triggerModal={ this.triggerModal.bind( this ) } />
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


    componentWillMount() {

    }
} // /App


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default App;
