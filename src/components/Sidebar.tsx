
import { JSX } from 'react';

function Sidebar(): JSX.Element {
    return (
        <aside style={sidebarStyle}>
            <div style={iconStyle}>R</div>
            <div style={activeNavItemStyle} title="Dashboard">🏠</div>
            <div style={navItemStyle} title="Candidates">👤</div>
            <div style={navItemStyle} title="Jobs">💼</div>
            <div style={navItemStyle} title="Clients">🏢</div>
            <div style={navItemStyle} title="Settings">⚙️</div>
        </aside>
    );
}

export default Sidebar;

const sidebarStyle: React.CSSProperties = {
    width: '64px',
    background: '#23395d',
    color: '#fff',
    minHeight: '100vh',
    padding: '1.2rem 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

const iconStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    marginBottom: '1.2rem',
    background: '#4066a5',
    fontWeight: 700,
    fontSize: '1.1rem',
};

const navItemStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '0.5rem',
    background: 'none',
    color: '#fff',
    fontSize: '1.2rem',
};

const activeNavItemStyle: React.CSSProperties = {
    ...navItemStyle,
    background: '#4066a5',
};