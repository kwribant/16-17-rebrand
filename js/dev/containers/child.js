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
// Types
var portfolio_pieces_1 = require("../static/content/portfolio-pieces");
var SubPage = (function (_super) {
    __extends(SubPage, _super);
    function SubPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderGuts = function (stub) {
            if (_this.isValidPiece(stub)) {
                var content = portfolio_pieces_1.PortfolioPieces[stub];
                return (React.createElement("p", null, "Match found!"));
            }
            else {
                return (React.createElement("p", null, "404 page"));
            }
        };
        return _this;
    }
    SubPage.prototype.isValidPiece = function (portfolioPiece) {
        // Determine if the portfolio piece stub is valid. If it isn't, we'll serve
        // a 404 message and a list of valid portfolio pieces
        var validPieces = Object.keys(portfolio_pieces_1.PortfolioPieces);
        return validPieces.indexOf(portfolioPiece) >= 0;
    };
    SubPage.prototype.render = function () {
        var childStub = this.props.match.params.childStub;
        return this.renderGuts(childStub);
    };
    return SubPage;
}(React.Component));
exports.SubPage = SubPage;
