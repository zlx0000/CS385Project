import React, { useEffect, useState } from "react";
import Basket from "../Components/Basket";
import ResultsComponent from "../Components/ResultsComponent";
import '../Style/Search.css'


// Parent component - App
function Search() {

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [basket, setBasket] = useState([]);


  function comparePriceAsc(objA, objB) {
    let comparison = 0;
    if (objA.itemprice > objB.itemprice) comparison = 1;
    else if (objA.itemprice < objB.itemprice) comparison = -1;
    else comparison = 0;
    return comparison;
  }

  function findObjectIndex(needle) {
    return function (haystack) {
      return haystack.itemid === needle.itemid;
    };
  }

  function removeItemFromBasket(item) {
    let n = basket.findIndex(findObjectIndex(item));
    setBasket([...basket.slice(0, n), ...basket.slice(n + 1, basket.length)]);
  }
  function addItemToBasket(item) {
    // we use the Javascript SPREAD operator
    setBasket([...basket, item]);
  }
  function onSearchFormChange(event) {
  
    setSearchTerm(event.target.value);
  }



  useEffect(() => {
    const URL = "http://45.77.38.37";

    async function fetchitemData() {
      try {
        const response = await fetch(URL);
        const itemDataJson = await response.json(); 
        setLoading(true);
        setData(itemDataJson);
      } catch (error) {
        setError(error); 
        setLoading(false);
      } 
    } 
    fetchitemData();
  }, []);
  if (error) {
    return <h1>Opps! An error has occurred: {error.toString()}</h1>;
  } else if (loading === false) {
    return <h1>Waiting for the  data ...... waiting....</h1>;
  } else {
    return (
      <>
        <h1>This is the Store Search Page</h1>
        {/* <p>Your current search term is [{searchTerm}]</p> */}
        <form>
          <h4>Type your search here: </h4>
          <input onChange={onSearchFormChange} type="text" />
        </form>
        <hr />
        <ResultsComponent
          searchTermFromParent={searchTerm}
          arrayFromParent={data}
          addItemToBasket={addItemToBasket}
        />      
        <Basket
          basket={basket}
          removeItemFromBasket={removeItemFromBasket}
          sorting={comparePriceAsc}
        />
      </>
    );
  }
  
}





export default Search;