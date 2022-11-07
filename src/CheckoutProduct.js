import React from "react";
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating}) {

    const [{}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {         //remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',      //shoot the data layer with this action and id
            id: id,                          //search for this id in basket and remove it 
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />               {/* image ke right me sara info*/}
        
            <div className="checkoutProduct_info">   {/* copy from Product.js */}
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>   {/* upon clicking the remove from basket button, function removeFromBasket will be called */}
                {/* it doesn't pop item from array rather dispatches an action(info) and then we listen to that action in the reducer and manipulate state in the reducer accordingly */}
            </div>
        </div>
    )
}

export default CheckoutProduct;