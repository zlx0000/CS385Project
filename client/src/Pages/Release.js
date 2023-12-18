import React from "react";

function Release(){
    return(
        <div>
            <h1>This is the Item Release Page</h1>
            <form>
                <h5>Item Name:</h5>
                <input id="ItemName" type="text"/>
                <h5>Owner Name:</h5>
                <input id ="ownerName" type="text"/>
            </form>
        </div>
    );
}
export default Release;