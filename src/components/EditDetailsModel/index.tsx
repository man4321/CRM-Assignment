import React from "react";
import "./EditDetailsModel.css";

interface modelPropsI {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
}

const EditDetailsModel = ({ isOpen, onClose, title, children }: modelPropsI) => {
    if (!isOpen) return null;

    return (
        <div className="backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    {title && <h2 className="modal-title">{title}</h2>}
                    <button onClick={onClose} className="close-btn">
                        &times;
                    </button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default EditDetailsModel;
