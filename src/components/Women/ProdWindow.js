import React from 'react';

let Products = (props) => {
const {user, obj, index, addToCart} = props;
    
        return (
            <div key={index} className="prodBox">

                <img src={obj.image_url} alt='' className="prodBoxImg" />
                <p className="prodBoxName">{obj.product_name}</p>
                <p className="prodBoxPrice">${obj.price}</p>
                <button onClick={() => addToCart(obj, user)}>Add to Cart</button>

            </div>
        )
    

   
}

export default Products;