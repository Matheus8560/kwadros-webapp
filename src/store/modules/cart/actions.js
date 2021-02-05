export function addProductToCartRequest(product){
    return {
        type: 'ADD_PRODUCT_TO_CART_REQUEST',
        payload: {
            product,
        }
    }
}
export function addProductToCartSuccess(product){
    return {
        type: 'ADD_PRODUCT_TO_CART_SUCCESS',
        payload: {
            product,
        }
    }
}
export function addProductToCartFailure(productId){
    return {
        type: 'ADD_PRODUCT_TO_CART_FAILURE',
        payload: {
            productId,
        }
    }
}

export function addUploadToCart(upload){
    return {
        type: 'ADD_UPLOAD_TO_CART',
        payload: {
            upload,
        }
    }
}
export function addLoadingCart(loading){
    return {
        type: 'ADD_LOADING_CART',
        payload: {
            loading,
        }
    }
}

