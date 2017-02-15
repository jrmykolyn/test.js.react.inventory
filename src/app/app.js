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
    }

    render() {
        return (
            <div>
                <Inventory items={ items } triggerModal={ this.triggerModal.bind( this ) } />
                <Modal />
            </div>
        );
    }


    triggerModal( data ) {
        this.handleModal( data );
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
