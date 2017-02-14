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

        return (
            <Inventory />
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
