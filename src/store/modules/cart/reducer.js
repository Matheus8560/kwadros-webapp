import { ActionTypes } from './actionTypes';

const INITIAL_STATE = {
    items: {
        // kit_name: 'Moldura Classic',
        // kit_price: 0,
        // quantity: 0,
        // kit_quantity: 0,
        // price_unity: 0
        // quantity: 0
    }
}

const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {  
        case ActionTypes.addProductToCartSuccess: {
            const { product } = action.payload;

            return {
                ...state,
                items: {
                    ...product,
                }
            }
        }
        
        default: {
            return state;
        }
    }
}

export default cart;