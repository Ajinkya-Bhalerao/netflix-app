import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //logged In
        console.log(userAuth)
      }
      else{
        //logged out
      }
    })

    return unsubscribe;
  },[])

  const user = null;

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={ !user ? <LoginScreen /> : <HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
