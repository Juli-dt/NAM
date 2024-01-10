import React from 'react';
import { Link } from 'react-router-dom';
import './Initialpage.css'
import Banner from "../banner/Banner"
const initialPage = () => {
 return (
    <div>
      <Banner/>
      <div>
        <Link to="/perros" className="button">Perros</Link>
        <Link to="/gatos" className="button">Gatos</Link>
        <Link to="/pajaros" className="button">Pájaros</Link>
        <Link to="/hamsters" className="button">Hamsters</Link>
        <Link to="/peces" className="button">Peces</Link>
      </div>
    </div>
 );
};

export default initialPage;