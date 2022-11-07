import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {

  const [{ user }, dispatch] = useStateValue();

  //useEffect hook: piece of code which runs based on a given condition
  //how to rewrite class based components into functional components
  //listener that listens all the time when the user signs in our signs out
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {  //everytime the authentication state changes, get the authUser
      if(authUser){
        //user is logged in, push them into the data layer
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else{
        //user is logged out, set user to null
        
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {   //clean up operations go in here
      unsubscribe();  //if app rerenders, it detaches it from listener, and reattach it with a new listener
    }
  }, []);
  //use effect takes a function and a dependency as arguments
  //this bracket [] is a dependency, runs only once when the app component loads
  //when dependency = [basket], runs once when the app component loads and everytime the basket changes

  console.log("USER is >>>", user);

  return (
    <Router>
      <div className="app">
      <Switch>
        
        <Route path="/checkout">
          <Header />             {/* render the header */}
          <Checkout />
        </Route>
        
        <Route path="/login">
          <Login />              {/* render the login page */}
        </Route>
        
        <Route path="/">         {/*default route: if any of the above route doesn't match this will open*/}
          <Header />             {/* render the header */}
          <Home />               {/* render the homepage */}
        </Route>
      
      </Switch>
      </div>
    </Router>
  );
}

{
  /*we need React-ROUTER 👇*/
}
{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout/ */
}
{
  /* localhost.com/login */
}

export default App;


