"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var test_component_1 = require("./components/test-component");
ReactDOM.render(React.createElement(test_component_1.Test, { name: "Kyle", catchphrase: "Yas" }), document.getElementById("page-contents"));
