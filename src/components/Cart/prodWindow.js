import React from 'react';

let Products = (props) => {
const {add, minus, user, obj, index} = props;
    
        return (
            <div key={index} className="prodBox">

                <img src={obj.image_url} alt='' className="prodBoxImg" />
                <p className="prodBoxName">{obj.product_name}</p>
                <p className="prodBoxPrice">${obj.price}</p>
                <p>Qty:{obj.qty}</p>
                {/* <button onClick={() => add(obj, user)}>Add 1</button> */}
                {/* <button onclick={() => minus(obj, user)}>Subtract 1</button> */}
                {/* <button onclick={}>Delete</button> */}

            </div>
        )
    

   
}

export default Products;