import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css"



function Home(){
    
    return(
            <div>
                <h1>Welcome to Rainier Store </h1>
                <h2>- <i>Your Premier Destination for Second-Hand Treasures!</i></h2>
                <div className="button-container">
                    <Link to="/search" className="button">Search for Items</Link>
                    <Link to="/release" className="button">Release New Items</Link>
                </div>
            </div>
            
            

    );
}
export default Home;