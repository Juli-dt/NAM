import React from 'react';
import './Searchbar.css';

function SearchBar() {
 return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Buscar..."/>
      {/* <button className="search-button">Buscar</button> */}
    </div>
 );
}

export default SearchBar;