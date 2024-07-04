import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "./App.css";
import { Main } from "../containers/Main";
import { Footer } from "../components/Footer";
export const App = () => {
    return (_jsxs(React.Fragment, { children: [_jsx(Main, {}), _jsx(Footer, {})] }));
};
