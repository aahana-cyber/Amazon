import React from "react";
import './Home.css';
import Product from "./Product";

function Home(){
    return(
        <div className="home">
            <img 
                className="home_img"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="banner"
            />

            {/* Product props: id, title, price, rating, image */}
            <div className="home_row">
                <Product 
                    id={32001}
                    title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living"
                    price={110.00}  // integer inside bracket due to JSX
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81N7FmJhbhL.jpg"
                />
                <Product 
                    id={32002}
                    title="Fur Jaden Grey Casual Backpack with USB Charging Port and 15.6 Inch Laptop Pocket"
                    price={589.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/914dEHqRQCL._SX679_.jpg"
                /> 
            </div>
            <div className="home_row">
                <Product 
                    id={32003}
                    title="Fire-Boltt Ninja 2 SpO2 Full Touch Smartwatch with 30 Workout Modes, Heart Rate Tracking, and 100+ Cloud Watch Faces, 7 Days of extensive Battery"
                    price={1599.99}
                    rating={4}
                    image="https://rukminim1.flixcart.com/image/416/416/kshtxu80/smartwatch/e/z/y/android-ios-bsw007-fire-boltt-no-original-imag6fe3h38c6rma.jpeg?q=70"
                />
                <Product 
                    id={32004}
                    title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
                    price={3149}
                    rating={5}
                    image="https://mobileimages.lowes.com/productimages/882b4f63-309a-4a91-8b73-4e9da237503c/17866694.jpg?size=pdhism"
                /> 
                <Product 
                    id={32005}
                    title="Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)"
                    price={16999.50}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSulIKIZFFi7lsFOjXmGQgEAXtuZZMA9dupEOUisax_UNIaLFQMAML1AwEy1L2UVHRW8nhOBwML62pBNgCb4vBQLRrJ653ENrpzcHYtUi4gNnPFXE__K05p3A&usqp=CAE"
                /> 
            </div>
            <div className="home_row">
                <Product 
                    id={32006}
                    title='ZEBRONICS Zeb-V19Hd 18.5 Inch (46.99 cm) Led Monitor with Supporting Hdmi, Vga Input, Hd 1366 X 768 Pixels, 16.7M Colors, Glossy Panel, Slim Design & Wall Mountable, Black'
                    price={4599.00}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/815UZPn8WUL._SX522_.jpg"
                />
            </div>
            
        </div>
    );
}

export default Home