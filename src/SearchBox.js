import React from "react";

// Receiving search value and method to call on input change
const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type="search"
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;