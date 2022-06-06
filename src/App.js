import { useEffect, useState } from "react";
import Country from "./Country";
import Cart from "./Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) =>setCountries(data));
  }, []);
   const handleAddCountry = (country)=> {
     const newCart =[...cart, country]
     setCart(newCart);
   }
  return (
    <div>
      <h3>Available Countries: {countries.length}</h3>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <div className="countries-container">
        {countries.map((country) => (     
          // <h2>{country.name}</h2> 
          <Country key={country.alpha3Code} handleAddCountry={handleAddCountry} country={country}></Country>

        ))}
      </div>
    </div>
   );
 }
 export default App;
