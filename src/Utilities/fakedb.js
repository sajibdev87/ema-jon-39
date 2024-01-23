import { json } from "react-router-dom";

/* locale storage start product set kora */
const addToDb = id => {
    let shoppingCart = {}

    const storedCart =localStorage.getItem('shopping-cart'); 
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }

    const quantity = shoppingCart[id]
    if(quantity) {
        const newQuantity = quantity + 1;
        shoppingCart [id] = newQuantity
    }

    else{
        shoppingCart[id] = 1
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

/*locale storage start product set or add kora cloos  */

/* locale storage a product get kora */

const getStoredCart = () => {
    let shoppingCart = {}

   const storedCart = localStorage.getItem('shopping-cart');
   if(storedCart) {
     shoppingCart = JSON.parse(storedCart)

   }
   return shoppingCart
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart) {
        const shoppingCart = json.parse(storedCart);
        if(id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }
