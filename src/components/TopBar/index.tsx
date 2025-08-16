import { JSX } from "react";
import rcmLogo from "../../assets/rcmLogo.svg";
import addItemLogo from "../../assets/addItem.svg";
import quickAddButton from "../../assets/quickAddButton.svg";
import msgIcon from "../../assets/msgIcon.svg";
import notificationIcon from "../../assets/notificationIcon.svg";
import profileIcon from "../../assets/profile.svg";
import "./TopBar.css";

function TopBar(): JSX.Element {
    return (
        <header className="top-bar">
            {/* Left - Search */}
            <div className="top-bar__search-container">
                <div className="top-bar__search">
                    <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="#b0b7c3"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input placeholder="Search Pipedrive" />
                </div>
            </div>

            {/* Center - Logo */}
            <div className="top-bar__logo">
                <img alt="rcm logo" src={rcmLogo} />
            </div>

            {/* Right - Actions */}
            <div className="top-bar__actions">
                <span>
                    <img src={addItemLogo} alt="Add Item" />
                </span>
                <span className="top-bar__divider" />
                <span>
                    <img src={quickAddButton} alt="Quick Add" />
                </span>
                <span>
                    <img src={msgIcon} alt="Messages" />
                </span>
                <span>
                    <img src={notificationIcon} alt="Notifications" />
                </span>
                <span>
                    <img src={profileIcon} alt="Profile" />
                </span>
            </div>
        </header>
    );
}

export default TopBar;
