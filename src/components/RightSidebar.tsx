import { JSX, useState } from 'react';

type TabType = 'Notes & Calls' | 'Tasks' | 'Meeting' | 'Files';

interface NoteItem {
    type: 'Note';
    status: string;
    content: string;
    associations: string;
    author: string;
    date: string;
}

interface TaskItem {
    type: 'Task';
    content: string;
    meta: string;
}

interface MeetingItem {
    type: 'Meeting';
    content: string;
    meta: string;
}

interface FileItem {
    type: 'Files';
    content: string;
    meta: string;
}

type TabData = {
    'Notes & Calls': NoteItem[];
    Tasks: TaskItem[];
    Meeting: MeetingItem[];
    Files: FileItem[];
};

const tabs: TabType[] = ['Notes & Calls', 'Tasks', 'Meeting', 'Files'];

const data: TabData = {
    'Notes & Calls': [
        {
            type: 'Note',
            status: 'To Do',
            content:
                'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
            associations: '1 Association(s)',
            author: 'John Doe',
            date: 'Jul 12, 2023, 11:54 am',
        },
        {
            type: 'Note',
            status: 'To Do',
            content:
                'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
            associations: '1 Association(s)',
            author: 'John Doe',
            date: 'Jul 12, 2023, 11:54 am',
        },
    ],
    Tasks: [
        {
            type: 'Task',
            content: 'Follow up with candidate for interview scheduling.',
            meta: 'Due: Jul 15, 2023',
        },
    ],
    Meeting: [
        {
            type: 'Meeting',
            content: 'Zoom call with client scheduled for Jul 16, 2023, 2:00 pm.',
            meta: 'Organizer: John Doe',
        },
    ],
    Files: [
        {
            type: 'Files',
            content: 'Resume_WilliamSample.pdf',
            meta: 'Uploaded: Jul 10, 2023',
        },
    ],
};

const panelStyle: React.CSSProperties = {
    background: '#f5f6fa',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    padding: '1.2rem 1.2rem 0.5rem 1.2rem',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: '1px solid #e0e6ed',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSize: '0.95rem',
};

const tabListStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.2rem',
    borderBottom: '1px solid #e0e6ed',
    marginBottom: '1rem',
};

const tabStyle: React.CSSProperties = {
    padding: '0.5rem 0.4rem',
    cursor: 'pointer',
    color: '#4066a5',
    fontWeight: 500,
    border: 'none',
    background: 'none',
    borderBottom: '2px solid transparent',
    fontSize: '0.95rem',
    transition: 'color 0.2s',
};

const activeTabStyle: React.CSSProperties = {
    ...tabStyle,
    color: '#222f3e',
    borderBottom: '2px solid #4066a5',
};

const noteCardStyle: React.CSSProperties = {
    textAlign: 'left',
    background: ' #fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    // borderRadius: '8px',
    padding: '0.8rem',
    marginBottom: '1rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
    fontSize: '0.94rem',
};

const noteTitleStyle: React.CSSProperties = {
    fontWeight: 600,
    color: '#4066a5',
    marginBottom: '0.2rem',
    fontSize: '0.96rem',
    textAlign: 'left',
};

const noteMetaStyle: React.CSSProperties = {
    textAlign: 'left',
    color: '#8395a7',
    fontSize: '0.91rem',
    marginTop: '0.4rem',
};

function RightSidebar(): JSX.Element {
    const [activeTab, setActiveTab] = useState<number>(0);

    const currentTab = tabs[activeTab];
    const items = data[currentTab];

    return (
        <div style={panelStyle}>
            <div style={tabListStyle}>
                {tabs.map((tab, idx) => (
                    <button
                        key={tab}
                        style={activeTab === idx ? activeTabStyle : tabStyle}
                        onClick={() => setActiveTab(idx)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
                {items.map((item, i) => (
                    <div style={noteCardStyle} key={i}>
                        <div style={noteTitleStyle}>
                            {item.type}
                            {'status' in item && item.status && (
                                <span style={{ color: '#8395a7', fontWeight: 400, marginLeft: 8 }}>
                                    {item.status}
                                </span>
                            )}
                        </div>
                        <div>{item.content}</div>
                        {'associations' in item && item.associations && (
                            <div style={{ color: '#4066a5', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                                {item.associations}
                            </div>
                        )}
                        {'meta' in item && item.meta && <div style={noteMetaStyle}>{item.meta}</div>}
                        {'author' in item && 'date' in item && item.author && item.date && (
                            <div style={noteMetaStyle}>
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
