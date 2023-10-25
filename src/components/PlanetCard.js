import React from 'react';
import { Link } from 'react-router-dom';
import './PlanetCard.css';

const PlanetCard = ({ planet, description, imageUrl }) => {
    const planetLink = planet ? `/planet/${planet.toLowerCase()}` : "/";

    return (
        <Link to={planetLink} className="planet-link">
            <div className="planet-card">
                <img src={imageUrl} alt={planet} className="planet-image" />
                <h3 className="planet-title">{planet}</h3>
                <p className="planet-description">{description}</p>
            </div>
        </Link>
    );
}

export default PlanetCard;

