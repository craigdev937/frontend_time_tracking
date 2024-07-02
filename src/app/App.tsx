import React from "react";
import "./App.css";
import Rock from "/Rock.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Rock} alt="Rock"
                height={"500px"} width={"auto"} 
            />
        </React.Fragment>
    );
};


