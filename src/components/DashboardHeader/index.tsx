import { JSX, useState } from "react";
import UserDetailsForm from "../UserDetailsForm";
import dotsIcon from "../../assets/dotsIcon.svg";
import fireIcon from "../../assets/fireIcon.svg";
import editIcon from "../../assets/editIcon.svg";
import starIcon from "../../assets/starIcon.svg";
import EditDetailsModel from "../EditDetailsModel";
import "./DashboardHeader.css";

function DashboardHeader(): JSX.Element {
    const [isEditModelOpen, setIsEditModelOpen] = useState(false);

    return (
        <>
            <div className="headerCard">
                <div className="avatar">M</div>
                <div className="info">
                    <div className="nameRow">
                        <span className="name">William Sample</span>
                        <span className="iconRow">
                            <span title="LinkedIn">🔗</span>
                            <span title="Twitter">🐦</span>
                            <span title="Verified">✔️</span>
                        </span>
                    </div>

                    <span className="title">
                        Senior Product Manager &nbsp;·&nbsp; United States &nbsp;·&nbsp; Dallas
                    </span>
                </div>
                <div className="actions">
                    <button className="btn">Contact Linked</button>
                    <span className="iconRow">
                        <div className="iconBtn">
                            <img src={starIcon} alt="Star Icon" />
                        </div>
                        <div className="iconBtn">
                            <img src={fireIcon} alt="fire Icon" />
                        </div>
                        <div className="iconBtn" onClick={() => setIsEditModelOpen(true)}>
                            <img src={editIcon} alt="edit Icon" />
                        </div>
                        <div className="iconBtn">
                            <img src={dotsIcon} alt="Dots Icon" />
                        </div>
                    </span>
                </div>
            </div>

            <div className="headerCard">
                <span className="contactItem">✉️ williamsample@gmail.com</span>
                <span className="contactItem">📞 +91 9021232326</span>
                <span style={{ color: "#8395a7", fontSize: "0.95rem", marginLeft: "0.7rem" }}>
                    Phyllis Yang &nbsp;·&nbsp; Jul 14, 2023, 4:04 pm
                </span>
            </div>

            <EditDetailsModel
                isOpen={isEditModelOpen}
                title="Edit User Details"
                onClose={() => setIsEditModelOpen(false)}
            >
                <UserDetailsForm closeEditModel={() => setIsEditModelOpen(false)} />
            </EditDetailsModel>
        </>
    );
}

export default DashboardHeader;
