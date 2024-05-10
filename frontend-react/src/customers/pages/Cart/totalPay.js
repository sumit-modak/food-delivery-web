export const cartTotal=(items)=>{

   return items.reduce((accumlatore, item)=>item.totalPrice+accumlatore,0)
}