import React from "react";

function Release(){
    console.log("11111");

    function createItem() {
        console.log("222");
        //debbugging
        let itemname = "test";
        let itemtype = "test";
        let itemprice = 1;
        let ownerid = 9999;
        let ownerfirstname = "test";
        let ownerlastname = "test";
        let phonenumber = "00000000";
        let address = "XXX XXXX";
        let itemcondition = "new"
        var form = document.getElementById("myform");
        if (!form) {
            console.error("Form element not found!");
            return;
          }
        
        // Add an event listener for the submit event
        
            itemname = form.elements["ItemName"].value;
            itemtype = form.elements["ItemType"].value;
            itemprice = form.elements["ItemPrice"].value;
            itemcondition = form.elements["ItemCondition"].value;
            ownerid = form.elements["OwnerId"].value;
            ownerfirstname = form.elements["OwnerFirstName"].value;
            ownerlastname = form.elements["OwnerLastName"].value;
            phonenumber = form.elements["PhoneNumber"].value;
            address = form.elements["Address"].value;
        
        
        // const itemname = document.getElementById('myform').itemname;
        console.log("333");
        //debbugging
        fetch('http://45.77.38.37/itemdata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({itemname,itemtype,itemprice,ownerid,ownerfirstname,ownerlastname,phonenumber,address,itemcondition}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            //getItem();
          });
      }
      //End of CreateItem;
    return(
        <div>
            <h1>This is the Item Release Page</h1>
            <form id="myform" >
                <label>Item Name: 
                <input id="ItemName" type="text"/><br></br>
                </label>
                <label>Item Type: 
                <select id="ItemType" >
                    <option value="Consumable Goods">Consumable Goods</option>
                    <option value="Durable Goods">Durable Goods</option>
                </select><br></br>
                </label>
                <label>Item Price: 
                <input id="ItemPrice" type="number"/><br></br>
                </label>
                <label>Item Condition: 
                <select id="ItemCondition" >
                    <option value="100% New">Brand New</option>
                    <option value="95% New">Almost New/Barely Used</option>
                    <option value="90% New">Very Good</option>
                    <option value="80% New">Fair</option>
                    <option value="Below">Poor</option>
                </select><br></br>
                </label>
                <label>Owner ID:
                <input id ="OwnerId" type="text"/><br></br>
                </label>
                <label>Owner First Name:
                <input id ="OwnerFirstName" type="text"/><br></br>
                </label>
                <label>Owner Last Name: 
                <input id ="OwnerLastName" type="text"/><br></br>
                </label>
                <label>Owner Phone Number: 
                <input id ="PhoneNumber" type="text"/><br></br>
                </label>
                <label>Address: 
                <input id ="Address" type="text"/><br></br>
                </label>
                <button  type="button" onClick={createItem} >Submit</button>
            </form>
        </div>
    );
}
export default Release;