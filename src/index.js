// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );


// --------------------------------------------------
// IMPORT PROJECT FILES
// --------------------------------------------------
require( './index.html' );


// --------------------------------------------------
// DO PROGRAM
// --------------------------------------------------
class App extends React.Component {
    render() {
        return (<h1>App</h1>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);