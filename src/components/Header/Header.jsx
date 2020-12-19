import React from 'react'
import Pokebola from '../../assets/pokeball.png';

export default function Header() {
    return (
        <div>
            
            <header>
                <div class="topOne"></div>

                <div class="bottomOne">
                    <ul>
                    <li>
                        <a href=""><img src={Pokebola} alt="" /></a>
                    </li>
                    <li><a href="">PokeBook</a></li>
                    </ul>
                </div>
                </header>
        </div>
    )
}
