import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Overview from './components/OverviewPage.js';
import PlanetPage from './components/PlanetPage.js';
import HomePage from './HomePage';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Charger les données depuis le fichier JSON
        fetch('/planets.json')  // Remplacez par le chemin d'accès de votre fichier JSON
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Erreur lors du chargement des données", error));
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/overview" element={<Overview data={data} />} />
                <Route path="/planet/:planetName" element={<PlanetPage data={data} />} />
                {/* Ajoutez d'autres routes ici si nécessaire */}
            </Routes>
        </Router>
    );
}

export default App;
