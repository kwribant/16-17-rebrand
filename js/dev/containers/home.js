"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Libs
var React = require("react");
// Components
var hero_1 = require("../components/hero");
var project_list_1 = require("../components/project-list");
var spacer_1 = require("../components/spacer");
var experience_1 = require("../components/experience");
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(hero_1.Hero, null),
            React.createElement(spacer_1.Spacer, null),
            React.createElement(project_list_1.ProjectList, null),
            React.createElement(spacer_1.Spacer, null),
            React.createElement(experience_1.Experiences, null),
            React.createElement(spacer_1.Spacer, null)));
    };
    return HomePage;
}(React.Component));
exports.HomePage = HomePage;
