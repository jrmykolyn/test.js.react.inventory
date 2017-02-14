// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );

import Inventory from '../components/inventory/inventory.js';


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class App extends React.Component {
    constructor() {
        console.log( 'INSIDE `App` `constructor()`' ); /// TEMP

        super(); /// TODO[@jrmykolyn] - Look into why `super()` call is required.
    }


    render() {
        console.log( 'INSIDE `App` `render()`' ); /// TEMP

        var items = [
            { name: 'Item 1' },
            { name: 'Item 2' },
            { name: 'Item 3' }
        ]

        return (
            <Inventory items={ items } />
        );
    }


    componentWillMount() {
        console.log( 'INSIDE `App` `componentWillMount()`' ); /// TEMP
    }
} // /App


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default App;
