import { JSX, useState } from "react";
import "./RightSidebar.css";

type TabType = "Notes & Calls" | "Tasks" | "Meeting" | "Files";

interface NoteItem {
    type: "Note";
    status: string;
    content: string;
    associations: string;
    author: string;
    date: string;
}

interface TaskItem {
    type: "Task";
    content: string;
    meta: string;
}

interface MeetingItem {
    type: "Meeting";
    content: string;
    meta: string;
}

interface FileItem {
    type: "Files";
    content: string;
    meta: string;
}

type TabData = {
    "Notes & Calls": NoteItem[];
    Tasks: TaskItem[];
    Meeting: MeetingItem[];
    Files: FileItem[];
};

const tabs: TabType[] = ["Notes & Calls", "Tasks", "Meeting", "Files"];

const data: TabData = {
    "Notes & Calls": [
        {
            type: "Note",
            status: "To Do",
            content:
                "Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat...",
            associations: "1 Association(s)",
            author: "John Doe",
            date: "Jul 12, 2023, 11:54 am",
        },
    ],
    Tasks: [
        {
            type: "Task",
            content: "Follow up with candidate for interview scheduling.",
            meta: "Due: Jul 15, 2023",
        },
    ],
    Meeting: [
        {
            type: "Meeting",
            content: "Zoom call with client scheduled for Jul 16, 2023, 2:00 pm.",
            meta: "Organizer: John Doe",
        },
    ],
    Files: [
        {
            type: "Files",
            content: "Resume_WilliamSample.pdf",
            meta: "Uploaded: Jul 10, 2023",
        },
    ],
};

function RightSidebar(): JSX.Element {
    const [activeTab, setActiveTab] = useState<number>(0);

    const currentTab = tabs[activeTab];
    const items = data[currentTab];

    return (
        <div className="sidebar-panel">
            <div className="tab-list">
                {tabs.map((tab, idx) => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === idx ? "active" : ""}`}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1, overflowY: "auto", paddingRight: "0.5rem" }}>
                {items.map((item, i) => (
                    <div className="note-card" key={i}>
                        <div className="note-title">
                            {item.type}
                            {"status" in item && item.status && (
                                <span className="note-status">{item.status}</span>
                            )}
                        </div>
                        <div>{item.content}</div>
                        {"associations" in item && item.associations && (
                            <div className="note-associations">{item.associations}</div>
                        )}
                        {"meta" in item && item.meta && (
                            <div className="note-meta">{item.meta}</div>
                        )}
                        {"author" in item && "date" in item && item.author && item.date && (
                            <div className="note-meta">
                                {item.author} · {item.date}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RightSidebar;
