import React, { useState, useEffect } from 'react';
import PlanetCard from './PlanetCard';
import './OverviewPage.css';

const planetImageMap = {
    Mercury: '/mercury.png',
    Venus: '/venus.jpg',
    Earth: '/earth.avif',
    Mars: '/mars.avif',
    Jupiter: '/jupiter.jpg',
    Saturn: '/saturn.avif',
    Uranus: '/uranus.avif',
    Neptune: '/neptune.avif',
}

const OverviewPage = () => {
    const [planetsData, setPlanetsData] = useState([]);

    useEffect(() => {
        fetch('/planets.json') 
            .then(response => response.json())
            .then(data => {
                console.log("Data from JSON:", data);
                setPlanetsData(data.planets);
            })
            .catch(error => {
                console.error("There was an error fetching the planets data:", error);
            });
    }, []);

    return (
        <div className="container">
            {Array.isArray(planetsData) && planetsData.map(planet => (
                <div key={planet.name} className="planet-card-container">
                    <PlanetCard 
                        planet={planet.name} 
                        description={planet.summary} 
                        imageUrl={planetImageMap[planet.name]} 
                    />
                </div>
            ))}
        </div>
    );
}

export default OverviewPage;
