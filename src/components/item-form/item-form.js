// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var React = require( 'react' );


// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var typesArr = [ 'Type 1', 'Type 2', 'Type 3' ];
var durabilityArr = [ 1,2,3,4,5 ];


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------
class ItemForm extends React.Component {
    constructor( props ) {
        super( props );

        this.state = this.getEmptyItem();
    }


    getEmptyItem() {
        return {
            name: '',
            durability: durabilityArr[ 0 ],
            type: typesArr[ 0 ]
        };
    }
    
    
    // TOOD[@jmykolyn] - Validate data before invoking `addItem()`.
    handleFormSubmit( event ) {
        event.preventDefault();

        // Loop over `this.state`, convert 'number strings' to integers.
        // TODO[@jmykolyn] - Revisit block below, maybe there's a more 'React-y' way to achieve the same result.
        for ( let key in this.state ) {
            let value = parseInt( this.state[ key ] );

            if ( !isNaN( value ) ) {
                this.state[ key ] = value;
            }
        }

        this.props.addItem( this.state );
        this.setState( this.getEmptyItem() );
    }


    handleFieldUpdate( event ) {
        event.preventDefault();

        // Dynamically set/update prop. on `state` object.
        // Approach below is equivalent to:
        // - var stateObj = {};
        // - stateObj[ event.target.name ] = event.target.value;
        // - this.setState( stateObj );
        this.setState( { [event.target.name]: event.target.value } );
    }


    render() {
        var initValue = 'Test Name';

        return (
            <form onSubmit={ this.handleFormSubmit.bind( this ) }>
                <div className="form-header">
                    <h2>Item Form</h2>
                </div>
                <div className="form-body">
                    <ul>
                        <li>
                            <label htmlFor="item_name">Item Name</label><br />
                            <input id="item_name" type="text" name="name" value={ this.state.name } onChange={ this.handleFieldUpdate.bind( this ) } />
                        </li>
                        <li>
                            <label htmlFor="item_type">Item Type</label><br />
                            <select id="item_type" name="type" value={ this.state.type } onChange={ this.handleFieldUpdate.bind( this ) }>
                            {
                                typesArr.map( ( type, index ) => {
                                    return <option key={ index } value={ type } >{ type }</option>
                                } )
                            }
                            </select>
                        </li>
                        <li>
                            <label htmlFor="item_durability">Item Durability</label><br />
                            <select id="item_durability" name="durability" value={ this.state.durability } onChange={ this.handleFieldUpdate.bind( this ) }>
                            {
                                durabilityArr.map( ( durability, index ) => {
                                    return <option key={ index } value={ durability } >{ durability }</option>
                                } )
                            }
                            </select>
                        </li>
                    </ul>
                </div>
                <div className="form-footer">
                    <input type="submit" value="Create Item" />
                </div>
            </form>
        );
    }

} // /App


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default ItemForm;
