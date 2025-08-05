

import { JSX } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SecondHeader from './SecondHeader';
import DashboardHeader from './DashboardHeader';
import DashboardTabs from './DashboardTabs';
import AssignedJobsTable from './AssignedJobsTable';
import UserDetailsGrid from './UserDetailsGrid';
import RightSidebar from './RightSidebar';


const layoutStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
    background: '#f5f6fa',
    overflowY: 'hidden',
};

const contentWrapperStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
};

const mainAreaStyle: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    // gap: '2rem',
};

const leftColStyle: React.CSSProperties = {
    flex: 2,
    minWidth: 0,
};

const rightColStyle: React.CSSProperties = {
    flex: 1,
    minWidth: 0,
};


function Dashboard(): JSX.Element {
    return (
        <div style={layoutStyle}>
            <Sidebar />
            <div style={contentWrapperStyle}>
                <TopBar />
                <SecondHeader />
                <div style={mainAreaStyle}>
                    <section style={leftColStyle}>
                        <DashboardHeader />
                        <UserDetailsGrid />
                        <DashboardTabs />
                        <AssignedJobsTable />
                    </section>
                    <aside style={rightColStyle}>
                        <RightSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;