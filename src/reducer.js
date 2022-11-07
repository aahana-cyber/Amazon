//all the logic of the data layer comes here

export const initialState = {
    basket: [],  //store is represented as an object, we have a basket which is an empty array (data layer in the beginning)
    user: null,  //no user in the beginning
};

//selector: function getBasketTotal takes array basket as input and returns the accumulated value of price. 
//Add current item price to the amount, initially the amount is 0. After iterating whole basket return amount.
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    
    console.log(action);  //to know what is being fired to the data layer

    switch(action?.type){  //action = dispatch
        case 'SET_USER':
            //Logic for updating the user when they log in or log out
            return {
                ...state,
                user: action.user  //if logged out i.e, no user then user = action.user = null
            }

        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            
            return {  //everytime we dispatch an action in the data layer, we need to return what the new data layer looks like
                ...state,
                basket: [...state.basket, action?.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket

            let newBasket = [...state.basket];      //cloned the basket
            
            const index = state.basket.findIndex(   //check to see if the index exists, findIndex is an inbuilt function
                (basketItem) => basketItem.id === action.id
            );
            
            if(index >= 0) {
                //item exists in basket, remove it
                newBasket.splice(index, 1);   //remove one item starting from index
            } 
            else {
                console.warn(
                    'Cant remove product (id: ',action.id,'as it is not in your shopping basket'
                );
            }
            
            return { 
                ...state,
                basket: newBasket,
             };

        default:      //don't do anything, just return the state
            return state;
    }
}

export default reducer;