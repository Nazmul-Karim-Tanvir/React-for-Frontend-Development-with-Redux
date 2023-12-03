import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import apk from '../app.apk';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return(
        <header className="navbar">
            <h1>Wallpapers</h1>
            <div className="apk">
                <a download href={apk}>
                    Установить приложение
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    </a>
            </div>
        </header>
    )
}
export default Navbar;