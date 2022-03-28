//For Add Item to cart
export const additem = (product) => {
    return{
        type: "ADDITEM",
        payload : product
    }

}

//For Delet Item From Cart
export const delItem = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}