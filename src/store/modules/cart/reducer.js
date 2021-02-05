import { ActionTypes } from './actionTypes';

const INITIAL_STATE = {
    items: {
        // kit_name: 'Moldura Classic',
        // kit_price: 0,
        // quantity: 0,
        // kit_quantity: 0,
        // price_unity: 0
        // quantity: 0
    },
    uploads: [],
    loading: true
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
        
        case ActionTypes.addUploadToCart: {
            const { upload } = action.payload;

            return {
                ...state,
                uploads: [
                    ...upload,
                ]
            }
        }

        case ActionTypes.addLoadingCart: {
            const { loading } = action.payload;

            return {
                ...state,
                loading,
            }
        }

        default: {
            return state;
        }
    }
}

export default cart;