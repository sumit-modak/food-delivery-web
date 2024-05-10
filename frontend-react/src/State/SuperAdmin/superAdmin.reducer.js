import * as actionTypes from "./superAdmin.actionType";

const initialState = {
  customers:[],
  pendingCustomers:[],
  loading: false,
  error: null,
};

const superAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CUSTOMERS_REQUEST:
    case actionTypes.GET_PENDING_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
    };
    case actionTypes.GET_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
    };
    case actionTypes.GET_PENDING_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        pendingCustomers: action.payload,
    };

    case actionTypes.GET_CUSTOMERS_FAILURE:
    case actionTypes.GET_PENDING_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
      return state;
  }
};

export default superAdminReducer;
