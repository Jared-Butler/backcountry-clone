const initialState = {
brands: [],
user: {},
cart: []

}

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_CART = 'UPDATE_CART';


export default function reducer (
    state=initialState, action
) {
    switch (action.type) {

        case UPDATE_USER:
        return {...state, user: action.payload }

        case UPDATE_CART:
        return { ...state, cart: action.payload }

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