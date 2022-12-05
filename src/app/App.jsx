import './App.css'
import LimboPage from "../pages/Limbo/LimboPage.jsx";
import CardDetailsPage from "../pages/CardDetails/CardDetailsPage.jsx";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header>
                HEADER TEST
            </header>
            <main>
                <Router>
                    <Routes>
                        <Route path="cards/:id" element={<CardDetailsPage/>}/>
                        <Route path="limbo" element={<LimboPage/>}/>
                        <Route path="/" element={<Navigate to="/limbo" replace/>}/>
                    </Routes>
                </Router>
            </main>
            <footer>
                FOOTER TEST
            </footer>
        </div>
    );
}

export default App
