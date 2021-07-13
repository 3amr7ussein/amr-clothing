import shopTypes from "./shop.types";


export const fillCollection = collections => ({
    type: shopTypes.FILL_SHOP_WITH_ITEMS,
    payload: collections
})