import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 713) {
                setIsMenuOpen(false);
            }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

return (
    <nav>
        <Link to="/"><h1>The Planets</h1></Link>
        <Link to="/overview"><h4>Overview</h4></Link>

        {/* Liste des planètes */}
        <div className="planet-list horizontal-list">
            {planets.map(planet => (
                <Link key={planet} to={`/planet/${planet.toLowerCase()}`}><h4>{planet}</h4></Link>
            ))}
        </div>

        {/* Bouton pour petits écrans */}
        <button className="planet-dropdown" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </button>

        {/* Menu déroulant pour petits écrans */}
        {isMenuOpen && (
            <div className="planet-list vertical-list">
                {planets.map(planet => (
                    <Link key={planet} to={`/planet/${planet.toLowerCase()}`}><h4>{planet}</h4></Link>
                ))}
            </div>
        )}
    </nav>
);
}


export default Navbar;
