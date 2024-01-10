import React from 'react';
// import { Link } from 'react-router-dom';
import './Banner.css';
import SearchBar from '../searchbar/Searchbar';

const Banner = () => {
    return (
        <div>
            <div class='banner'>
                <div >
                    <h3 class="text1">
                        Nidos - Acuarios y mascotas, tu catálogo online para tus mascotas
                    </h3>
                </div>
                <br />
                <SearchBar />
            </div>

        </div>
    );
};

export default Banner;