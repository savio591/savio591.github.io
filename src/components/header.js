import React from 'react'
import '../styles/header.css';

function Header() {
    const name = "SAVIL EXPERIMENTS"
    return (
        <header>
            <h1 className="header_logo">{name}</h1>
        </header>
    )
};

export default Header;