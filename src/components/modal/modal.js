// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class Modal extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="modal">
                <p>This is the Modal component.</p>
            </div>
        );
    }
} // /Modal


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Modal;
