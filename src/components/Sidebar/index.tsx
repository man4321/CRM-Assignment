import { JSX } from "react";
import "./Sidebar.css";

function Sidebar(): JSX.Element {
    return (
        <aside className="sidebar">
            <div className="sidebar-icon">R</div>
            <div className="nav-item active" title="Dashboard">🏠</div>
            <div className="nav-item" title="Candidates">👤</div>
            <div className="nav-item" title="Jobs">💼</div>
            <div className="nav-item" title="Clients">🏢</div>
            <div className="nav-item" title="Settings">⚙️</div>
        </aside>
    );
}

export default Sidebar;
