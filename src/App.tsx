import { NavLink, Route, Routes } from "react-router-dom";
import dashboard from "./pages/dashboard";
import equipments from "./pages/equipments";
import incidents from "./pages/incidents";
import users from "./pages/users";

export default function App() {
    return (
        <div className="app">
            <nav className="sidebar">
                <h1 className="brand">NexusOps</h1>
                <NavLink to="/" end>Tableau de bord</NavLink>
                <NavLink to="/equipments">Equipements</NavLink>
                <NavLink to="/users">Utilisateur</NavLink>
            </nav>

            <main className="content">
                <Routes>
                    <Route path="/" element={<dashboard />} />
                    <Route path="/equipments" element={<equipments />} />
                    <Route path="/incidents" element={<incidents />} />
                    <Route path="/users" element={<users />} />
                </Routes>
            </main>
        </div>
}