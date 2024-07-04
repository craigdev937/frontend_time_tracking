import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
ReactDOM
    .createRoot(document.getElementById("root"))
    .render(_jsx(React.Fragment, { children: _jsx(App, {}) }));
