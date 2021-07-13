import shopTypes from "./shop.types"

const INITIAL_STATE = {
    collections:{}
}

const shopReducer = (state=INITIAL_STATE,action)=>{

    switch(action.type){
      case shopTypes.FILL_SHOP_WITH_ITEMS:
        return(
            {  
                collections:action.payload
            })
        default :
        return state;
    }}
export default shopReducer;