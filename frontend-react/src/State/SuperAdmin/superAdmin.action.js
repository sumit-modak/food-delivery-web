import { api } from "../../config/api";
import { GET_CUSTOMERS_FAILURE, GET_CUSTOMERS_REQUEST, GET_CUSTOMERS_SUCCESS, GET_PENDING_CUSTOMERS_FAILURE, GET_PENDING_CUSTOMERS_REQUEST, GET_PENDING_CUSTOMERS_SUCCESS } from "./superAdmin.actionType";

export const getCustomers = () => {
    return async (dispatch) => {
      dispatch({type:GET_CUSTOMERS_REQUEST});
      try {
        const { data } = await api.get("api/customers");
        dispatch({type:GET_CUSTOMERS_SUCCESS,payload:data});
        console.log("created restaurant ", data);
      } catch (error) {
        dispatch({type:GET_CUSTOMERS_FAILURE,error:error.message});
      }
    };
};

export const getPendingCustomers = () => {
    return async (dispatch) => {
      dispatch({type:GET_PENDING_CUSTOMERS_REQUEST});
      try {
        const { data } = await api.get("api/customers");
        dispatch({type:GET_PENDING_CUSTOMERS_SUCCESS,payload:data});
        console.log("created restaurant ", data);
      } catch (error) {
        dispatch({type:GET_PENDING_CUSTOMERS_FAILURE,error:error.message});
      }
    };
};