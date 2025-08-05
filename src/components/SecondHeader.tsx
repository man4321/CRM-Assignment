import { JSX } from 'react';

const barStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    backgroundColor: '#F8F9FA',
    borderBottom: '1px solid #e0e6ed',
    padding: '0.7rem 2rem',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    fontSize: '1.05rem',
};

const breadcrumbStyle: React.CSSProperties = {
    color: '#4066a5',
    fontWeight: 500,
    fontSize: '1.05rem',
};

const idStyle: React.CSSProperties = {
    color: '#8395a7',
    marginLeft: '0.5rem',
    fontWeight: 400,
};

const idStyleWithBorder: React.CSSProperties = {
    ...idStyle,
    border: '1px solid #E9ECEF',
    padding: '0.1rem 0.3rem',
    borderRadius: '6px',
}

const btnRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.7rem',
};

const btnStyle: React.CSSProperties = {
    background: '#fff',
    color: '#4066a5',
    border: '1px solid #4066a5',
    borderRadius: '6px',
    padding: '0.4rem 1.2rem',
    fontWeight: 500,
    cursor: 'pointer',
    fontSize: '1rem',
};

function SecondHeader(): JSX.Element {
    return (
        <div style={barStyle}>
            <div>
                <span style={breadcrumbStyle}>
                    Candidates {'>'}
                </span>
                <span style={idStyle}>  Robert Hardy </span>
                <span style={idStyleWithBorder}>ID - 231</span>

            </div>
            <div style={btnRowStyle}>
                <button style={btnStyle}>Request Profile Update</button>
                <button style={btnStyle}>Previous</button>
                <button style={btnStyle}>Next</button>
            </div>
        </div>
    );
}

export default SecondHeader;
