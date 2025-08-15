
import { JSX, useState } from 'react';
import UserDetailsForm from './UserDetailsForm';
import useDashboardController from '../controllers/dashboardController';
import dotsIcon from '../assets/dotsIcon.svg';
import fireIcon from '../assets/fireIcon.svg';
import editIcon from '../assets/editIcon.svg';
import starIcon from '../assets/starIcon.svg';
import EditDetailsModel from './EditDetailsModel';



function DashboardHeader(): JSX.Element {
    const [isEditModelOpen, setIsEditModelOpen] = useState(false);

    return (
        <>
            <div style={headerCardStyle}>
                <div style={avatarStyle}>M</div>
                <div style={infoStyle}>
                    <div style={nameRowStyle}>
                        <span style={nameStyle}>William Sample</span>
                        <span style={iconRowStyle}>
                            <span title="LinkedIn">🔗</span>
                            <span title="Twitter">🐦</span>
                            <span title="Verified">✔️</span>
                        </span>
                    </div>

                    <span style={titleStyle}>Senior Product Manager &nbsp;·&nbsp; United States &nbsp;·&nbsp; Dallas</span>
                </div>
                <div style={actionsStyle}>
                    <button style={btnStyle}>Contact Linked</button>
                    <span style={iconRowStyle}>
                        <div style={iconBtnStyle}>
                            <img src={starIcon} alt="Star Icon" />
                        </div>
                        <div style={iconBtnStyle}>
                            <img src={fireIcon} alt="fire Icon" />
                        </div>
                        <div style={iconBtnStyle} onClick={() => setIsEditModelOpen(true)}>
                            <img src={editIcon} alt="edit Icon" />
                        </div>
                        <div style={iconBtnStyle}>
                            <img src={dotsIcon} alt="Dots Icon" />
                        </div>

                    </span>
                </div>
            </div>
            <div style={headerCardStyle}>
                <span style={contactItemStyle}>✉️ williamsample@gmail.com</span>
                <span style={contactItemStyle}>📞 +91 9021232326</span>
                <span style={{ color: '#8395a7', fontSize: '0.95rem', marginLeft: '0.7rem' }}>Phyllis Yang &nbsp;·&nbsp; Jul 14, 2023, 4:04 pm</span>
            </div>

            <EditDetailsModel
                isOpen={isEditModelOpen}
                title='Edit User Details'
                onClose={() => { setIsEditModelOpen(false) }}
                children={
                    <UserDetailsForm />
                }
            />

        </>
    );
}

export default DashboardHeader;


const headerCardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    padding: '1.5rem 2rem',
    borderBottom: '1px solid #e0e6ed',
    gap: '2rem',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

const avatarStyle: React.CSSProperties = {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: '#e0e6ed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#4066a5',
};

const infoStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
};

const nameRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
};

const nameStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '1.3rem',
    color: '#222f3e',
};

const titleStyle: React.CSSProperties = {
    color: '#576574',
    fontSize: '1rem',
};

const locationStyle: React.CSSProperties = {
    color: '#8395a7',
    fontSize: '0.97rem',
};

const contactRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    marginTop: '0.5rem',
};

const contactItemStyle: React.CSSProperties = {
    color: '#4066a5',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
};


const actionsStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.7rem',
    minWidth: '220px',
    justifyContent: 'flex-end',
};

const btnStyle: React.CSSProperties = {
    background: '#fff',
    color: '#e17055',
    border: '1px solid #e17055',
    borderRadius: '6px',
    padding: '0.4rem 1.2rem',
    fontWeight: 500,
    cursor: 'pointer',
    fontSize: '1rem',
};

const iconRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
    fontSize: '1.2rem',
    alignItems: 'center',
};

const iconBtnStyle: React.CSSProperties = {
    cursor: 'pointer',
};