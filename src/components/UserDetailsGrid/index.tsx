import { JSX } from "react";
import "./UserDetailsGrid.css";
import useDashboardController from "../../controllers/dashboardController";

function UserDetailsGrid(): JSX.Element {
    const { dashboardData, loading, error } = useDashboardController();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="user-details-grid">
            {dashboardData?.map((item: any) => (
                <div key={item.label} className="user-details-grid__item">
                    <span className="user-details-grid__label">{item.label}:</span>
                    <span className="user-details-grid__value">{item.value}</span>
                </div>
            ))}
        </div>
    );
}

export default UserDetailsGrid;
