const initialState = {
brands: [],
user: {},
cart: [],
total: 0,
orders: []

}

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CART = 'UPDATE_CART';
const TOTAL = 'TOTAL'
const UPDATE_PAST_ORDERS = 'UPDATE_PAST_ORDERS'


export default function reducer (
    state=initialState, action
) {
    switch (action.type) {

        case UPDATE_USER:
        return {...state, user: action.payload }

        case UPDATE_CART:
        return { ...state, cart: action.payload }

        case TOTAL:
        return { ...state, total: action.payload }

        case UPDATE_PAST_ORDERS:
        return { ...state, orders: action.payload }

        default: return state;
    }
}



export function updateUser(userData){
    return {
        type: UPDATE_USER,
        payload: userData
    }
}

export function updateCart(prodData){
    return {
        type: UPDATE_CART,
        payload: prodData
    }
}

export function getTotal(total){
    return {
        type: TOTAL,
        payload: total
    }
}

export function updatePastOrders(prodData){
    return {
        type: UPDATE_PAST_ORDERS,
        payload: prodData
    }
}
