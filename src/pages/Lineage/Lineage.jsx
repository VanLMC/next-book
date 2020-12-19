import React, { useState } from 'react'

import './lineage.css';

import Bulbassauro from '../../assets/Bulbassauro.jpg' ;
import Ivissauro from '../../assets/Ivissauro.jpg';
import Venossauro from '../../assets/venusauro.jpg';
import Seta from '../../assets/seta.png';
export default function Lineage() {

        const [evolutions, setEvolutions] = useState([
            {
                name: 'Bulbassauro',
                image: Bulbassauro,
            },
            {
                name: 'Ivissauro',
                image: Ivissauro
            },
            {
                name: 'Venossauro',
                image: Venossauro
            }

        ]);


    return (
        <div id="lineage">

        <div className="evolution-list">
            {evolutions.map( evolution => (
                <>

                <div className="image-container">
                    <img src={evolution.image} alt={evolution.name} />
                    
                    
                    <figcaption>{evolution.name}</figcaption>
                </div>
                <img className="seta" src={Seta} alt=""/>
                </>
            ))}
        </div>
        
        </div>
    )
}
