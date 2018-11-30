import React from 'react';
import {connect} from 'react-redux';

let Products = (props) => {
const {add, minus, user,  product} = props;
    
        return (
            <div className="prodBox">

                <img src={props.image_url} alt='' className="prodBoxImg" />
                <p className="prodBoxName">{props.product_name}</p>
                <p className="prodBoxPrice">${props.price}</p>
                <p>Qty:{props.qty}</p>
                <button onClick={() => add(product, user)}>Add 1</button>
                <button onClick={() => minus(product, user)}>Subtract 1</button>
                {/* <button onClick={}>Delete</button> */}

            </div>
        )
    

   
}

const mapStatetoProps = (state, index) => {
    return {
        cart: state.cart
        
    }
}

export default connect(mapStatetoProps,null)(Products);