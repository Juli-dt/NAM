// Banner.js
import React from 'react';
import './Banner.css';
import SearchBar from '../searchbar/Searchbar';
import gato from '../../assets/Gato.png';
import perro from '../../assets/Perro.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="left-section">
        <img src={gato} alt="gato" className="cat" />
      </div>
      <div className="center-section">
        <h3 className="text1">
          Nidos - Acuarios y mascotas, tu catálogo online para tus mascotas
        </h3>
        <SearchBar className="bar" />
      </div>
      <div className="right-section">
        <img src={perro} alt="perro" className="dog" />
      </div>
    </div>
  );
};

export default Banner;
