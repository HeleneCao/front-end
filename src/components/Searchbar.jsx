import React, { useState } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSearch() {
     console.log("click")
  }

  return (
    <div className=" border border-gray-400 rounded-full p-1 px-2 flex items-center ">
      <input className='flex-grow focus:outline-none'
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search"
      />
      <button type="button" onClick={handleSearch}>
        <img
          src="src\images\loupe.png"
          alt="Logo Planning"
          className="h-4 w-auto"          
        ></img>
    </button>
    </div>
  );
}

export default SearchBar;