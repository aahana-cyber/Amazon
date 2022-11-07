import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout(){

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img alt="Ads"
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />
                
                {basket?.length === 0 ? (  //if basket is empty show me this stuff (: = else)
                <div>
                    <h2>Your shopping basket is empty!</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" button next to the item.</p>
                </div>
                ) : (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/* list out all the Checkout Products */}
                    {basket.map((item) => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
                )}
            </div>
            
            {basket?.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;