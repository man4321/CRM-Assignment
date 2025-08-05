import { JSX } from 'react';

const tabs = [
    'All Details',
    'Assigned Jobs',
    'Related Emails',
    'Candidate Questions',
    'Hotlists',
    'Related Details',
    'Contact(s) Pitched',
];

const tabListStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.2rem',
    fontSize: '0.95rem',
    // borderBottom: '1px solid #e0e6ed',
    // marginBottom: '1.5rem',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

const tabStyle: React.CSSProperties = {
    padding: '1rem 0.4rem',
    cursor: 'pointer',
    color: '#222f3e',
    fontWeight: 500,
    border: 'none',
    background: 'none',
    borderBottom: '2px solid transparent',
};

const activeTabStyle: React.CSSProperties = {
    ...tabStyle,
    color: '#4066a5',
    background: '#fff',
    borderBottom: '2px solid #4066a5',
};

function DashboardTabs(): JSX.Element {
    return (
        <div style={tabListStyle}>
            {tabs.map((tab, idx) => (
                <button
                    key={tab}
                    style={idx === 1 ? activeTabStyle : tabStyle} // 'Assigned Jobs' active
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default DashboardTabs;
