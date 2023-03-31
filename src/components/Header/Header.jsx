import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <h1 className="logo">Tech#Blogs</h1>
                    <ul className="nav-links">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">BLOGS</a></li>
                        {/* <img className="nav-img" src="https://www.clipartmax.com/png/full/136-1363971_author-image-logo-user-png.png" alt="Nav Image"/> */}
                    </ul>
                    <img className="nav-img" src="https://www.clipartmax.com/png/full/136-1363971_author-image-logo-user-png.png" alt="Nav Image"/>
		
	            </nav>
            </header>
        </div>
    );
};

export default Header;