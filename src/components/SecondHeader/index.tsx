import { JSX } from "react";
import "./SecondHeader.css";

function SecondHeader(): JSX.Element {
    return (
        <div className="second-header">
            <div>
                <span className="breadcrumb">Candidates {'>'}</span>
                <span className="candidate-id"> Robert Hardy </span>
                <span className="candidate-id-box">ID - 231</span>
            </div>

            <div className="btn-row">
                <button className="header-btn">Request Profile Update</button>
                <button className="header-btn">Previous</button>
                <button className="header-btn">Next</button>
            </div>
        </div>
    );
}

export default SecondHeader;
