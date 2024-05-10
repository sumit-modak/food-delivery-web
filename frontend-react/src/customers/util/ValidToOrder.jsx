export function isValid(cartItems){
    console.log("cartItems -------------- ",cartItems[0].food?.restaurant.id)
    const restaurantId=cartItems[0]?.food?.restaurant.id
   
    for(let item of cartItems){
        console.log("item ---- ", item.restaurant?.id)
      if(item.food?.restaurant.id!==restaurantId){
        return false;
      }
    }
    return true
  }