import { JSX } from 'react';
import rcmLogo from '../assets/rcmLogo.svg';
import searchIcon from '../assets/searchIcon.svg';
import addItemLogo from '../assets/addItem.svg';
import quickAddButton from '../assets/quickAddButton.svg';
import msgIcon from '../assets/msgIcon.svg';
import notificationIcon from '../assets/notificationIcon.svg';
import profileIcon from '../assets/profile.svg'

function TopBar(): JSX.Element {
    return (
        <header style={topBarStyle}>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'relative', width: '260px' }}>
                    <span
                        style={{
                            position: 'absolute',
                            left: '12px',
                            top: '50%',
                            transform: 'translateY(-40%)',
                            color: '#b0b7c3',
                            fontSize: '1rem',
                            pointerEvents: 'none',
                        }}
                    >
                        <svg width="16" height="16" fill="none" stroke="#b0b7c3" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </span>
                    <input
                        style={{
                            ...searchStyle,
                            paddingLeft: '2.2rem',
                            width: '100%',
                        }}
                        placeholder="Search Pipedrive"
                    />
                </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img alt='rcm logo' src={rcmLogo} />
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.2rem' }}>
                <span>
                    <img src={addItemLogo} />
                </span>
                <span
                    style={{
                        display: 'inline-block',
                        width: '1px',
                        height: '28px',
                        background: '#e0e6ed',
                        margin: '0 0.8rem',
                        verticalAlign: 'middle',
                    }}
                />
                <span>
                    <img src={quickAddButton} />
                </span>
                <span>
                    <img src={msgIcon} />
                </span>
                <span>
                    <img src={notificationIcon} alt='notification' />
                </span>
                <span>
                    <img src={profileIcon} alt="Profile" />
                </span>
            </div>
        </header>
    );
}

export default TopBar;

const topBarStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#fff',
    padding: '0.7rem 2rem',
    borderBottom: '1px solid #e0e6ed',
    minHeight: '56px',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

const searchStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid #e0e6ed',
    fontSize: '1rem',
    width: '260px',
    marginRight: '1.5rem',
};

const logoStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '1.2rem',
    color: '#4066a5',
    marginRight: '2rem',
};

const userInfoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
};