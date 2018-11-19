const initialState = {
 status: 'loggedOut',
 brands: [],
}

const LOG_IN_USER = 'LOG_IN_USER';


export default function reducer (
    state=initialState, action
) {
    switch (action.type) {


        default: return state;
    }
}

export function logInUser(value){
    return {
        type: LOG_IN_USER,
        payload: value
    }
}