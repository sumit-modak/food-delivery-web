// Actions.js
import * as actionTypes from './ActionTypes';

// Create Order Actions
export const createOrderRequest = () => ({
  type: actionTypes.CREATE_ORDER_REQUEST,
});

export const createOrderSuccess = (order) => ({
  type: actionTypes.CREATE_ORDER_SUCCESS,
  payload: order,
});

export const createOrderFailure = (error) => ({
  type: actionTypes.CREATE_ORDER_FAILURE,
  payload: error,
});

export const getUsersOrdersRequest = () => ({
    type: actionTypes.GET_USERS_ORDERS_REQUEST,
  });
  
  export const getUsersOrdersSuccess = (orders) => ({
    type: actionTypes.GET_USERS_ORDERS_SUCCESS,
    payload: orders,
  });
  
  export const getUsersOrdersFailure = (error) => ({
    type: actionTypes.GET_USERS_ORDERS_FAILURE,
    payload: error,
  });
  