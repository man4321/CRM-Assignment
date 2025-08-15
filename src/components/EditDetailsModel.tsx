import React from "react";
interface modelPropsI {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
}

const EditDetailsModel = ({ isOpen, onClose, title, children }: modelPropsI) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }} onClick={onClose}>
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '40px', width: '700px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', height: '500px', overflow: 'scroll' }} onClick={(e) => e.stopPropagation()}>
                {title && <h2 style={{ margin: '0 0 20px' }}>{title}</h2>}
                <div style={{ marginBottom: '20px' }}>
                    {children}
                </div>
                <button onClick={onClose} style={{ backgroundColor: '#4066a5', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px 20px', cursor: 'pointer' }}>Close</button>
            </div>
        </div>
    );
}

export default EditDetailsModel;

