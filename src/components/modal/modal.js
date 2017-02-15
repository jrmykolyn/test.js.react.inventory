// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class Modal extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            isActive: false,
            data: this.props.data
        };
    }


    render() {
        return (
            <div className={ this.getClassName() }>
                <h2>{ this.props.data.name }</h2>
                <p>{ this.props.data.description }</p>
                <p>{ this.props.data.durability }</p>
            </div>
        );
    }


    getClassName() {
        // return ( this.state.isActive ) ? 'modal--active' : 'modal';
        return 1;
    }
} // /Modal


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default Modal;
