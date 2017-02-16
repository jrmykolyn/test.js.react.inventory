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
    constructor() {
        super();

        this.state = {
            itemName: '',
            itemDurability: durabilityArr[ 0 ],
            itemType: typesArr[ 0 ]
        };
    }
    
    
    handleFormSubmit( event ) {
        console.log( 'INSIDE `handleFormSubmit()`' ); /// TEMP

        event.preventDefault();
    }


    handleNameUpdate( event ) {
        event.preventDefault();

        this.setState( { itemName: event.target.value } );
    }


    handleTypeUpdate( event ) {
        event.preventDefault();

        this.setState( { itemType: event.target.value } );
    }


    handleDurabilityUpdate( event ) {
        event.preventDefault();

        this.setState( { itemDurability: event.target.value } );
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
                            <input id="item_name" type="text" value={ this.state.itemName } onChange={ this.handleNameUpdate.bind( this ) } />
                        </li>
                        <li>
                            <label htmlFor="item_type">Item Type</label><br />
                            <select id="item_type" value={ this.state.itemType } onChange={ this.handleTypeUpdate.bind( this ) }>
                            {
                                typesArr.map( ( type, index ) => {
                                    return <option key={ index } value={ type } >{ type }</option>
                                } )
                            }
                            </select>
                        </li>
                        <li>
                            <label htmlFor="item_durability">Item Durability</label><br />
                            <select id="item_durability" value={ this.state.itemDurability } onChange={ this.handleDurabilityUpdate.bind( this ) }>
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
                </div>
            </form>
        );
    }

} // /App


// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
export default ItemForm;
