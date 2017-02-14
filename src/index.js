// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );


// --------------------------------------------------
// IMPORT PROJECT FILES
// --------------------------------------------------
require( './index.html' );
require( './styles/styles.scss' );

import App from './app/app.js';


// --------------------------------------------------
// DO PROGRAM
// --------------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);