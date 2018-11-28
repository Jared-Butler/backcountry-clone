//Be sure to create a seperate folder to house the reusable component that will be used to display all products.
//This should be identical to the Men's component with the only difference being the word "Men's" and the prducts being pulled through.

//Be sure to create a seperate folder to house the reusable component that will be used to display all products

import React, {Component} from 'react';
import axios from 'axios';
import './Women.css';
import {connect} from 'react-redux';
import { updateCart } from './../../ducks/reducer';

class Women extends Component{
    constructor(){
        super();
        this.state = {
            productsArr: []
        }
    }

     componentDidMount = async () => {
        await axios.get(`/api/clothing/womens`)
        .then( (res) => {
            this.setState({productsArr: res.data},
                
                
                )
        } )
        .catch( (err) => {console.log(err)});
    }



    // invoke with product object instead of just the id;.
addToCart = product => {
    const { product_id } = product;
    if (!this.props.user.email) {
      alert('Please login to add items to your cart');
    } else {
      const cartArr = this.props.cart;
      let itemFound = false;
      for (let i = 0; i < cartArr.length; i++) {
        const currentProduct = cartArr[i];
        if (product_id === currentProduct.product_id) {
          currentProduct.qty += 1;
          itemFound = true;
        }
      }
      if (!itemFound) {
        this.props.updateCart([...cartArr, { ...product, qty: 1 }]);
      } else {
        this.props.updateCart([...cartArr]);
      }
    }
  };





    render(){

        let products = '';

       if (this.state.productsArr === []) { 

     products = <p>Nothing Rendered</p>
}
else{
    products = this.state.productsArr.map( (obj, index) => {
        return(
            <div key={index} className="prodBox">

                <img src={obj.image_url} alt='' className="prodBoxImg" />
                <p className="prodBoxName">{obj.product_name}</p>
                <p className="prodBoxPrice">${obj.price}</p>
                <button onClick={() => this.addToCart(obj)}>Add to Cart</button>

            </div>
        )
    } )
}

        return(
            <div className="page">
                <div className="buffer"></div>

                {products}
            </div>
        )
    }
}


const mapDispatchtoProps = {
    updateCart
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Women);