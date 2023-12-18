import React, { useState } from "react";

var num1 =5;

function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    
    function onSearchFormChange(event) {
        setSearchTerm(event.target.value);
      }
    var num2 = 10;
    
    return(
            <div>
                <h1>Welcome to Item Market</h1>
                

                
            </div>
            
            

    );
}
export default Home;