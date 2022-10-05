import React from "react";
import "./successModal.scss";
import { AiOutlineCheck } from "react-icons/ai";


const SuccessModal = ({ closeResponseModal }) => {
    return (
        <div className="successModalContainer">
            <div className="successModal">
                <div className="success success-animation icon-top">
                    <AiOutlineCheck />                
                </div>
                <div className="success border-bottom"></div>
                <div className="successModal-content">
                    <p className="successModal-title">Request sent</p>
                    <p className="successModal-message">
                        Please check email in your spam folder for password
                        reset link.
                    </p>
                    <button
                        className="successModal-closeBtn"
                        onClick={closeResponseModal}
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;