import { useStateValue } from "./StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React from "react";
import './Header.css';
import { Link } from "react-router-dom";  {/* makes image a link which opens to the page specified after to upon clicking */}

function Header(){

    const [{ basket, user }] = useStateValue();  //const [state, dispatch] = useStateValue(), here we don't need dispatch
    //state = {basket}, DISPATCH = gun, when 'ADD TO BASKET' shoots (appends) an item in the data layer, for 'REMOVE FROM BASKET' shoots (removes) an item of the data layer
    
    console.log("kkk",user);  //print the updated basket array

    return(
        <nav className="header">
            {/* logo on the left */}
            <Link to="/">   
                <img 
                    className="header_logo" 
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            
            {/* search bar */}
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div>
            
            {/* 3 links */}
            <div className="header_nav">
                {/* 1st link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line1">Hello {user ? user.email : "Stranger"}{/*Hello {user?.email}*/}</span>
                        <span className="header_option_line2">Sign {user ? "Out" : "In"}{/*Sign in*/}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line1">Returns</span>
                        <span className="header_option_line2">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_line1">Your</span>
                        <span className="header_option_line2">Prime</span>
                    </div>
                </Link>

                {/* 4th link Basket icon with a no. */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* no. of items in the basket */}
                        <span className="header_option_line2 header_basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div> 
        </nav>
    );
}

export default Header;