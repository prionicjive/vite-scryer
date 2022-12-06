import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import CardDetailsPage from "../../../pages/CardDetails/CardDetailsPage.jsx";
import LimboPage from "../../../pages/Limbo/LimboPage.jsx";

import "./Content.css";

function Content() {
    return (
        <main className="Content">
            <Router>
                <Routes>
                    <Route path="cards/:id" element={<CardDetailsPage/>}/>
                    <Route path="limbo" element={<LimboPage/>}/>
                    <Route path="/" element={<Navigate to="/limbo" replace/>}/>
                </Routes>
            </Router>
        </main>
    );
}

export default Content;