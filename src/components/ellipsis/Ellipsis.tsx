import React from "react";
import "./Ellipsis.css";
import Ellipsis from "/icon-ellipsis.svg";

export const Elipsis = () => {
    return (
        <React.Fragment>
            <img 
                className="ellipsis"
                alt="Ellipsis" 
                src={Ellipsis} 
            />
        </React.Fragment>
    );
};


