import { JSX } from 'react';
import useDashboardController from '../controllers/dashboardController';




function UserDetailsGrid(): JSX.Element {
    const { dashboardData, loading, error } = useDashboardController();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div style={detailsGridStyle}>
            {dashboardData?.map((item) => [
                <div>
                    <span key={item.label + '-label'} style={labelStyle}>{item.label + ':'}</span>
                    <span key={item.label + '-value'} style={valueStyle}>{item.value}</span>
                </div>
            ])}
        </div>
    );
}

export default UserDetailsGrid;

const detailsGridStyle: React.CSSProperties = {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: '1.2rem',
    textAlign: 'left',
    flexWrap: 'wrap',
    background: '#fff',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    padding: '2rem',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',

};

const labelStyle: React.CSSProperties = {
    color: '#576574',
    fontWeight: 500,
    fontSize: '0.97rem',
    textAlign: 'right',
    paddingRight: '1.2rem',
    whiteSpace: 'nowrap',
};

const valueStyle: React.CSSProperties = {
    color: '#8395a7',
    fontWeight: 500,
    fontSize: '1.05rem',
    textAlign: 'left',
    whiteSpace: 'pre-line',
};
