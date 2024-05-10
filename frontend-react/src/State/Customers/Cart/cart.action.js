
import { api } from "../../../config/api";
import {
  findCartFailure,
  findCartRequest,
  findCartSuccess,
  getAllCartItemsFailure,
  getAllCartItemsRequest,
  getAllCartItemsSuccess,
} from "./ActionCreators";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionTypes";

export const findCart = (token) => {
  return async (dispatch) => {
    dispatch(findCartRequest());
    try {
      const response = await api.get(`/api/cart/`,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      });
      dispatch(findCartSuccess(response.data));
    } catch (error) {
      dispatch(findCartFailure(error));
    }
  };
};

export const getAllCartItems = (reqData) => {
  return async (dispatch) => {
    dispatch(getAllCartItemsRequest());
    try {
      const response = await api.get(`/api/carts/${reqData.cartId}/items`,{
        headers: {
            Authorization: `Bearer ${reqData.token}`,
          },
      });
      dispatch(getAllCartItemsSuccess(response.data));
    } catch (error) {
      dispatch(getAllCartItemsFailure(error));
    }
  };
};

export const addItemToCart= (reqData) => {
  return async (dispatch) => {
    dispatch({type:ADD_ITEM_TO_CART_REQUEST});
    try {
      const {data} = await api.put(`/api/cart/add`,reqData.cartItem,{
        headers: {
            Authorization: `Bearer ${reqData.token}`,
          },
      });
      console.log("add item to cart ",data)
      dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data});
      
    } catch (error) {
      console.log("catch error ",error)
      dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message});
    }
  };
};

export const updateCartItem= (reqData) => {
  return async (dispatch) => {
    dispatch({type:UPDATE_CARTITEM_REQUEST});
    try {
      const {data} = await api.put(`/api/cart-item/update`,reqData.data,{
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
        },
      });
      console.log("update cartItem ",data)
      dispatch({type:UPDATE_CARTITEM_SUCCESS, payload:data});
      
    } catch (error) {
      console.log("catch error ",error)
      dispatch({type:UPDATE_CARTITEM_FAILURE,payload:error.message});
    }
  };
};

export const removeCartItem= ({cartItemId,jwt}) => {
  return async (dispatch) => {
    dispatch({type:REMOVE_CARTITEM_REQUEST});
    try {
      const {data} = await api.delete(`/api/cart-item/${cartItemId}/remove`,{
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("remove cartItem ",data)
      dispatch({type:REMOVE_CARTITEM_SUCCESS, payload:cartItemId});
      
    } catch (error) {
      console.log("catch error ",error)
      dispatch({type:REMOVE_CARTITEM_FAILURE,payload:error.message});
    }
  };
};

export const clearCartAction= () => {
  return async (dispatch) => {
    dispatch({type:CLEARE_CART_REQUEST});
    try {
      const {data} = await api.put(`/api/cart/clear`,{},{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
     
      dispatch({type:CLEARE_CART_SUCCESS, payload:data});
      console.log("clear cart ",data)
    } catch (error) {
      console.log("catch error ",error)
      dispatch({type:CLEARE_CART_FAILURE,payload:error.message});
    }
  };
};

