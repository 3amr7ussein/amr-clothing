export const addItemToCart = (cartItems,cartItemToAdd)=>{
    const existingCartItem = cartItems.find(cartItem=>(cartItem.id === cartItemToAdd.id));
    if(existingCartItem){
        return cartItems.map(cartItem=>(
            cartItem.id===cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}
            :cartItem
        ))
    }
    else
        return [
            ...cartItems , {...cartItemToAdd , quantity:1}
        ]
            
        
    
}

export const clearItem = (cartItems,itemToRemove)=>{
    const newCartItems = cartItems.filter(item=>item.name!==itemToRemove.name);
    return newCartItems;
}