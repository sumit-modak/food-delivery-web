import * as actionTypes from './ActionTypes';

// Find Cart Actions
export const findCartRequest = () => ({
  type: actionTypes.FIND_CART_REQUEST,
});

export const findCartSuccess = (cart) => ({
  type: actionTypes.FIND_CART_SUCCESS,
  payload: cart,
});

export const findCartFailure = (error) => ({
  type: actionTypes.FIND_CART_FAILURE,
  payload: error,
});


// Get All Cart Items Actions
export const getAllCartItemsRequest = () => ({
    type: actionTypes.GET_ALL_CART_ITEMS_REQUEST,
  });
  
  export const getAllCartItemsSuccess = (cartItems) => ({
    type: actionTypes.GET_ALL_CART_ITEMS_SUCCESS,
    payload: cartItems,
  });
  
  export const getAllCartItemsFailure = (error) => ({
    type: actionTypes.GET_ALL_CART_ITEMS_FAILURE,
    payload: error,
  });

  
