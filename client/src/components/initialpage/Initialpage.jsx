import React from 'react';
import { Link } from 'react-router-dom';
import './Initialpage.css'
import Banner from "../banner/Banner"
const initialPage = () => {
 return (
    <div className='all'>
      <Banner/>
      <div class='buttons'>
      <button><h1>Perros</h1></button>
      <button><h1>Gatos</h1></button>
      <button><h1>Peces</h1></button>
      <button><h1>Hamster</h1></button>
      <button><h1>Pájaros</h1></button>
      </div>
      <div className='rectangle'>
        <p>   </p>
      </div>
    </div>
 );
};

export default initialPage;