import React from 'react'
import { useState } from 'react';
import './SearchBar.css';

function SearchBar({onSubmit}) {

  const [term,setTerm] = useState(''); //step 1

  const handleFormSubmit = (event) => {
    // userSubmit();
    event.preventDefault();
    // console.log('the parent is here')
    onSubmit(term);
  };
   const handleChange = (event)=>{ //step 2
    setTerm(event.target.value); // step-4
   };
  
  return (
    <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
    <label>search </label>
    {/* step 5 and step 3 */}
     <input value={term} onChange={handleChange}/> 
    </form>
    {/* <button onClick={handleClick}>click me </button> */}
    </div>
  
  )
}

export default SearchBar