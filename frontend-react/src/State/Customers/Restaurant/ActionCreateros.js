import * as actionTypes from './ActionTypes';
// Create Restaurant Actions
export const createRestaurantRequest = () => ({
    type: actionTypes.CREATE_RESTAURANT_REQUEST,
  });
  
  export const createRestaurantSuccess = (restaurant) => ({
    type: actionTypes.CREATE_RESTAURANT_SUCCESS,
    payload: restaurant,
  });
  
  export const createRestaurantFailure = (error) => ({
    type: actionTypes.CREATE_RESTAURANT_FAILURE,
    payload: error,
  });

  // Get All Restaurants Actions (similar structure for other actions)
export const getAllRestaurantsRequest = () => ({
    type: actionTypes.GET_ALL_RESTAURANTS_REQUEST,
  });
  
  export const getAllRestaurantsSuccess = (restaurants) => ({
    type: actionTypes.GET_ALL_RESTAURANTS_SUCCESS,
    payload: restaurants,
  });
  
  export const getAllRestaurantsFailure = (error) => ({
    type: actionTypes.GET_ALL_RESTAURANTS_FAILURE,
    payload: error,
  });
  

  // Delete Restaurant Actions
export const deleteRestaurantRequest = () => ({
    type: actionTypes.DELETE_RESTAURANT_REQUEST,
  });
  
  export const deleteRestaurantSuccess = (restaurantId) => ({
    type: actionTypes.DELETE_RESTAURANT_SUCCESS,
    payload: restaurantId,
  });
  
  export const deleteRestaurantFailure = (error) => ({
    type: actionTypes.DELETE_RESTAURANT_FAILURE,
    payload: error,
  });


  // Update Restaurant Actions
export const updateRestaurantRequest = () => ({
    type: actionTypes.UPDATE_RESTAURANT_REQUEST,
  });
  
  export const updateRestaurantSuccess = (updatedRestaurant) => ({
    type: actionTypes.UPDATE_RESTAURANT_SUCCESS,
    payload: updatedRestaurant,
  });
  
  export const updateRestaurantFailure = (error) => ({
    type: actionTypes.UPDATE_RESTAURANT_FAILURE,
    payload: error,
  });

  export const getRestaurantByIdRequest = () => ({
    type: actionTypes.GET_RESTAURANT_BY_ID_REQUEST,
  });
  
  export const getRestaurantByIdSuccess = (restaurant) => ({
    type: actionTypes.GET_RESTAURANT_BY_ID_SUCCESS,
    payload: restaurant,
  });
  
  export const getRestaurantByIdFailure = (error) => ({
    type: actionTypes.GET_RESTAURANT_BY_ID_FAILURE,
    payload: error,
  });
  