import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>11 BULLETS</h1>
            <nav>
                <a href="/Player">Player</a>
                <a href="/Detail">Player Detail</a>
                <a href="/manage">Manage Team</a>
            </nav>
        </div>
    );
};

export default Header;