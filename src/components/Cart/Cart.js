import React, {Component} from 'react';
import './Cart.css';
import {connect} from 'react-redux';
import { updateCart, getTotal, updatePastOrders } from './../../ducks/reducer';
import Products from './prodWindow';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
        }
    }

    async componentDidMount(){
        //finish setting up an on render set state method for the cart
        if (this.props.user.id)
           {this.populateCart()}
        
    };
    

    populateCart = async () => {
        let res = await axios.get(`/api/cart/${this.props.user.id}`)
        this.props.updateCart(res.data);
        this.totalPrice()
    }

    addOne = async (product, user) => {
        const { product_id } = product;
        const { id } = user;

        let res = await axios.put(`/api/cart/add/one`,{
            product_id: product_id, 
            cust_id: id
          })
        this.props.updateCart(res.data);
        this.totalPrice();
    }

    minusDelete = (product, user) => {
        const { qty } = product;
        
        qty === 1 ? this.deleteItem(product, user) : this.minusOne(product, user)
    };

    minusOne = async (product, user) => {
        const { product_id } = product;
        const { id } = user;

        let res = await axios.put(`/api/cart/minus/one`,{
            product_id: product_id, 
            cust_id: id
          })
        this.props.updateCart(res.data);
        this.totalPrice();
    }

    deleteItem = async (product, user) => {
        const {product_id} = product;
        const {id} = user;
        let res = await axios.delete(`/api/cart/delete/${product_id}/${id}`)
        this.props.updateCart(res.data);
        this.totalPrice();
    }

    totalPrice = () => {
           let total = this.props.cart.reduce( (acc, obj) => {
                const {qty, price} = obj;
                return acc + price *qty
            },0 )   
        this.props.getTotal(total);
    }

    checkOut = async (stripeID) => {
        const {id} = this.props.user;
        const {cart, total} = this.props;
       let res1 = await axios.post(`/api/cart/checkout`,{
           stripe_id: stripeID,
            cust_id: id,
            price: total,
            items: cart,
        });
        this.props.updatePastOrders(res1.data);

        //set up stripe process to run here.

        let res = await axios.delete(`/api/cart/checkout/${id}`);
        this.props.updateCart(res.data);
        this.props.getTotal(total);
    }

    onTokenReceived = token => {
        //this sets the token to 'undefined'
        token.card = void 0;
        axios.post(`/api/cart/checkout/charge`, {token, amount: this.props.total*100})
        .then( res => {
            alert("Payment processed successfully!");
            this.checkOut(res.data.id)
        })
    }



    render(){
       if (this.props.cart.length === 0) { 

     return (
         <div>
             <div className="cartBuffer">
             <p className="empty" >Your cart is empty!</p>

             </div>
         </div>
     )
}
    let products = this.props.cart.map( (obj, index) => {
        return(
    <Products 
    product={obj}
    key={obj.product_id}
    user={this.props.user}
    add={this.addOne}
    minus={this.minusOne}
    minusDelete={this.minusDelete}
    deleteItem={this.deleteItem}
    {...obj}
    index={index}
    
    />
        )
    } )





        return(
            <div className="page">

                <div className="buffer"></div>

                <h3 className='total'>Order Total: ${this.props.total}</h3>
                <br/>

                {products}

                <br />
                
                <StripeCheckout
                className='prodBox' 
                name="High Country Products"
                description="Payment Handler"
                token= {this.onTokenReceived}
                stripeKey={process.env.REACT_APP_KEYPUBLISHABLE}
                amount={this.props.total*100}
                />

                
            </div>
        )
    }
}



const mapDispatchtoProps = {
    updateCart,
    getTotal,
    updatePastOrders
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart,
        user: state.user,
        total: state.total
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);