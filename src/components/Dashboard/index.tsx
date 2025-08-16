import { JSX } from "react";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";
import SecondHeader from "../SecondHeader";
import DashboardHeader from "../DashboardHeader";
import DashboardTabs from "../DashboardTabs";
import AssignedJobsTable from "../AssingnedJobsTable";
import UserDetailsGrid from "../UserDetailsGrid";
import RightSidebar from "../RightSidebar";
import "./Dashboard.css";

function Dashboard(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="contentWrapper">
                <TopBar />
                <SecondHeader />
                <div className="mainArea">
                    <section className="leftCol">
                        <DashboardHeader />
                        <UserDetailsGrid />
                        <DashboardTabs />
                        <AssignedJobsTable />
                    </section>
                    <aside className="rightCol">
                        <RightSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
