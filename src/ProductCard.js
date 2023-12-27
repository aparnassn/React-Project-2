import { useShop } from "./ShopContext";
import { useState, useEffect } from "react";

const { addToCart, removeFromCart, updatePrice } = useShop();
const [isInCart,setIsInCart]= useState(false)

useEffect(() => {
    const productIsInCart = products.find((product) => product.Name === Name)

    if(productIsInCart){
        setIsInCart(true)
    }
    else{
        setIsInCart(false)
    }
},[products,Name])