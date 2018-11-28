//Be sure to create a seperate folder to house the reusable component that will be used to display all products

import React, {Component} from 'react';
import axios from 'axios';
import './Men.css';
import {connect} from 'react-redux';
import { updateCart } from './../../ducks/reducer';
import Products from './ProdWindow';

class Men extends Component{
    constructor(){
        super();
        this.state = {
            productsArr: []
        }
    }

     componentDidMount = async () => {
        await axios.get(`/api/clothing/mens`)
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

       if (this.state.productsArr.length === 0) { 

     return <p>Nothing Rendered</p>
}

    // products = this.state.productsArr.map( (obj, index) => {
    //     return(
    //         <div key={index} className="prodBox">

    //             <img src={obj.image_url} alt='' className="prodBoxImg" />
    //             <p className="prodBoxName">{obj.product_name}</p>
    //             <p className="prodBoxPrice">${obj.price}</p>
    //             <button onClick={() => this.addToCart(obj)}>Add to Cart</button>

    //         </div>
    //     )
    // } )


    products = this.state.productsArr.map( (obj, index) => {
        return(
            
    <Products 
    addToCart={this.addToCart}
    obj={obj}
    index={index}
    />
        )
    } )





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

export default connect(mapStatetoProps, mapDispatchtoProps)(Men);