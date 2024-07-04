import React from "react";
import "./App.css";
import { Main } from "../containers/Main";
import { Footer } from "../components/footer/Footer";

export const App = () => {
    return (
        <React.Fragment>
            <Main />
            <Footer />
        </React.Fragment>
    );
};


