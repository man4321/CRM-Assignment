import React, { JSX } from 'react';

function AssignedJobsTable(): JSX.Element {
    const [toggled, setToggled] = React.useState(false);
    const handleToggle = () => {
        setToggled(!toggled);
    };
    return (
        <div style={tableContainerStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    Assinged Jobs to William Sample

                </div>
                <div>
                    <button style={btnStyle}>Assign to Job</button>
                    <button style={viewBtnStyle}>View All Assigned Items</button>
                </div>
            </div>
            <table style={tableStyle}>
                <tbody>
                    {[1, 2].map((_, idx) => (
                        <tr key={idx} style={trStyle}>
                            <td style={tdStyle}>Senior Product Manager</td>
                            <td style={tdStyle}>
                                <div>
                                    William Sample
                                </div>
                                <div>
                                    Jul 12, 2023
                                </div>
                            </td>
                            <td style={tdStyle}>Assigned</td>
                            <td style={tdStyle}><button style={viewBtnStyle}>View Files</button></td>
                            <td style={tdStyle}>
                                <span style={toggleWrapperStyle}>
                                    <button style={{ ...toggleStyle, background: '#4066a5' }} aria-label="Toggle" onClick={handleToggle}>
                                        <span style={{ ...toggleCircleStyle, left: `${toggled ? '2px' : '19px'}`, background: '#fff' }} />
                                    </button>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AssignedJobsTable;


const tableContainerStyle: React.CSSProperties = {
    background: '#fff',
    // borderRadius: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    padding: '1.5rem',
    // marginTop: '1rem',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '1rem',
    marginTop: '1rem',
};

const trStyle: React.CSSProperties = {
    border: '1px solid #e0e6ed',
    padding: '1rem',
    margin: '1rem',
}
const tdStyle: React.CSSProperties = {
    padding: '1.2rem 0.5rem',
    fontSize: '0.98rem',
};


const btnStyle: React.CSSProperties = {
    background: '#4066a5',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.4rem 1rem',
    marginRight: '0.5rem',
    cursor: 'pointer',
    fontWeight: 500,
    outline: 'none',
    transition: 'background 0.2s',
};

const viewBtnStyle: React.CSSProperties = {
    ...btnStyle,
    background: '#fff',
    color: '#4066a5',
    border: '1px solid #4066a5',
};

const toggleWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
};

const toggleStyle: React.CSSProperties = {
    width: '38px',
    height: '22px',
    borderRadius: '12px',
    background: '#e0e6ed',
    position: 'relative',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s',
    marginLeft: '0.5rem',
};

const toggleCircleStyle: React.CSSProperties = {
    position: 'absolute',
    top: '3px',
    left: '3px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: '#4066a5',
    transition: 'left 0.2s',
};