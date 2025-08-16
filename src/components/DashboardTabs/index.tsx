import { JSX } from "react";
import "./DashboardTabs.css";

const tabs = [
    "All Details",
    "Assigned Jobs",
    "Related Emails",
    "Candidate Questions",
    "Hotlists",
    "Related Details",
    "Contact(s) Pitched",
];

function DashboardTabs(): JSX.Element {
    return (
        <div className="tabList">
            {tabs.map((tab, idx) => (
                <button
                    key={tab}
                    className={`tab ${idx === 1 ? "active" : ""}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default DashboardTabs;
