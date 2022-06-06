import React from 'react';

function Country(props) {
 
  const {name, population,region,flag}=props.country;
  const flagStyle ={height:'50px'}
  const handleAddCountry = props.handleAddCountry;
  return (
    <div>
      <h4>This is a {name}</h4>
      <img style={flagStyle} src={flag} alt=""/>
      <p>population: {population}</p>
      <p><small>Region:{region}</small></p>
      <button onClick={()=>handleAddCountry(props.country)}>Add country</button>

    </div>
  );
}

export default Country;