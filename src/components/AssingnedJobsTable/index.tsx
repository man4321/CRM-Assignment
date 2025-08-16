import React, { JSX } from "react";
import "./AssignedJobsTable.css";

function AssignedJobsTable(): JSX.Element {
    const [toggled, setToggled] = React.useState(false);

    const handleToggle = () => {
        setToggled(!toggled);
    };

    return (
        <div className="tableContainer">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>Assigned Jobs to William Sample</div>
                <div>
                    <button className="btn">Assign to Job</button>
                    <button className="btn viewBtn">View All Assigned Items</button>
                </div>
            </div>
            <table className="table">
                <tbody>
                    {[1, 2].map((_, idx) => (
                        <tr key={idx} className="tr">
                            <td className="td">Senior Product Manager</td>
                            <td className="td">
                                <div>William Sample</div>
                                <div>Jul 12, 2023</div>
                            </td>
                            <td className="td">Assigned</td>
                            <td className="td">
                                <button className="btn viewBtn">View Files</button>
                            </td>
                            <td className="td">
                                <span className="toggleWrapper">
                                    <button
                                        className={`toggle ${toggled ? "toggleActive" : ""}`}
                                        aria-label="Toggle"
                                        onClick={handleToggle}
                                    >
                                        <span
                                            className={`toggleCircle ${toggled ? "toggleCircleLeft" : "toggleCircleRight"
                                                }`}
                                        />
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
