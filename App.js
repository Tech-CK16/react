import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement (
    "div", // element type
    {id: "parent"}, // attributes
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement(
                "h1",
                {id: 1},
                "I am an H1 Tag!!"
            ),
            React.createElement(
                "h2",
                {id: 2},
                "I am an H2 Tag!!"
            )
        ]
    )
);  

const heading = React.createElement("h1", { id: "heading" }, "Hello World!!");

const root = ReactDOM.createRoot(document.getElementById("root"));
const header = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
header.render(heading);