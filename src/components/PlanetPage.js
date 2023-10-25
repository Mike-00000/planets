import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PlanetPage.css'

const planetBackgrounds  = {
    Mercury: '/mercury.png',
    Venus: '/venus.jpg',
    Earth: '/earth.avif',
    Mars: '/mars.avif',
    Jupiter: '/jupiter.jpg',
    Saturn: '/saturn.avif',
    Uranus: '/uranus.avif',
    Neptune: '/neptune.avif',
}

const DetailItem = ({ label, value }) => {
    return (
        <div className="detail-item">
            <p><strong>{label}</strong></p>
            <p>{value}</p>
        </div>
    );
}

const PlanetPage = () => {
    const { planetName } = useParams();
    const formattedPlanetName = planetName.charAt(0).toUpperCase() + planetName.slice(1);
    const backgroundImage = planetBackgrounds[formattedPlanetName];
    const [planetData, setPlanetData] = useState(null);

    useEffect(() => {
        fetch(`/planets.json`)
        .then(response => response.json())
        .then(data => {
            const planetDetails = data.planets.find(planet => planet.name.toLowerCase() === planetName.toLowerCase());
            setPlanetData(planetDetails);
        })

            .catch(error => {
                console.error("Error fetching planet data:", error);
            });
    }, [planetName]);

    if (!planetData) return <div>Loading...</div>;

    return (
        <div className="planet-details-wrapper">
            <div 
                className="background" 
                style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>
            <div className="planet-details">
                <div className="side-details left">
                    <DetailItem label="Distance from Sun:" value={planetData.distance_from_sun} />
                    <DetailItem label="Radius:" value={planetData.radius} />
                    <DetailItem label="Average Temperature:" value={planetData.average_temperature} />
                </div>
    
                <div className="details-main">
                    <DetailItem label="Details:" value={planetData.details} />
                </div>
    
                <div className="side-details right">
                    <DetailItem label="Rotation Period:" value={planetData.rotation_period} />
                    <DetailItem label="Orbital Period:" value={planetData.orbital_period} />
                    <DetailItem label="Average Orbital Speed:" value={planetData.average_orbital_speed} />
                </div>
    
                <div className="bottom-details">
                    <DetailItem label="Number of Satellites:" value={planetData.satellites} />
                    <DetailItem label="Mass:" value={planetData.mass} />
                    <DetailItem label="Mass Comparison to Earth:" value={planetData.mass_comparison_to_earth} />
                </div>
            </div>
        </div>
    );    
}

export default PlanetPage;
