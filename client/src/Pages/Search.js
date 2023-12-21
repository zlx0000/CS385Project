import React, { useEffect, useState } from "react";


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
        <h1>This is the Search Page</h1>
        <p>Your current search term is [{searchTerm}]</p>
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

function ResultsComponent(props) {

  function filterFunction(searchTerm) {
    return function (data) {
      // convert everything to lower case for string matching
      let itemName = data.itemname.toLowerCase();
      // let itemName = data.itemname;

    //  let itemType = data.itemType.toLowerCase();
      return (
        searchTerm !== "" &&
        // (itemName.includes(searchTerm))
        (itemName.includes(searchTerm.toLowerCase()))

      );
    };
  }


  let numberResults = props.arrayFromParent.filter(
    filterFunction(props.searchTermFromParent)
  ).length;

  return (
    <>
      <h1>You are looking for</h1>
      <div class= "container-fluid">
        <div class= "table-responsive">
      <h2>There are {numberResults} search results </h2>
      {numberResults === 0 && <p>No results</p>}
      {numberResults > 0 && numberResults < 10 && <p>Some results, not many</p>}
      {numberResults > 10 && <p>Lots of results</p>}
      
      <table class = "table table-striped table-hover table-bordered">
        <thead class="table-dark">
          <tr class="lead">
            <th>ItemName</th>
            <th>ItemType</th>
            <th>ItemPrice(€)</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
      {props.arrayFromParent.filter(filterFunction(props.searchTermFromParent)).map((a, index) => (
          <tr key={index}>
            <td>
              <b>{a.itemname}</b>
            </td>
            <td>
              <b>{a.itemtype}</b>
            </td>
            <td>
              <b>{a.itemprice}  <button type="button" class="btn btn-secondary btn-sm" onClick={()=>props.addItemToBasket(a)}>Add to basket</button></b>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      </div>
    </>
  );
}// end of child component for results.

function Basket(props) {
  function getBasketTotal(acc, obj) {
    return acc + obj.itemprice;
  }

  const handleButtonClick = () => {
    alert("Submitted successfully");
  };
  return (
    <>
      <div class="alert alert-secondary" role="alert">
        <h3>Your secondhand shopping basket</h3>
        {/* <img alt="secondhand shopping basket" class="img-fluid" src={basketPicture} /> */}
        <p>
          Your basket has <b>{props.basket.length}</b> items
        </p>
        <p>
          <b>Total cost: €{props.basket.reduce(getBasketTotal, 0)}</b>
        </p>
        {props.basket.sort(props.sorting).map((p, index) => (
          <p key={index}>
            {p.itemname},€{p.itemprice}{" "}
            <button
              class="btn btn-info"
              onClick={() => props.removeItemFromBasket(p)}
            >
              Remove
            </button>
          </p>
        ))}
      </div>
      <p>
        <button class="btn btn-Success btn-lg" onClick={handleButtonClick}>
          Submit
        </button>
      </p>
    </>
  );
}

export default Search;