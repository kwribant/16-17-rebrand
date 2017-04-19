"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Content
var arbor_1 = require("./portfolio-pieces/arbor");
var dropbox_business_redesign_1 = require("./portfolio-pieces/dropbox-business-redesign");
var dropabout_1 = require("./portfolio-pieces/dropabout");
var downgrade_redesign_1 = require("./portfolio-pieces/downgrade-redesign");
exports.PortfolioPieces = {
    'arbor': arbor_1.ArborData,
    'dropbox-business-redesign': dropbox_business_redesign_1.DropboxBusinessRedesignData,
    'dropbox-business-downgrade-redesign': dropabout_1.DropaboutData,
    'dropabout-redesign': downgrade_redesign_1.DowngradeRedesignData
};
exports.PortfolioPieceList = [
    {
        headline: 'Arbor',
        copy: 'Component library and SCSS framework paired as a source of truth for development and design',
    },
    {
        headline: 'Dropbox Business Downgrade Redesign',
        copy: 'Redesign and re-architecture of Dropbox Business’ downgrade experience',
    },
    {
        headline: 'Dropbox Business Redesign',
        copy: 'Dropbox Business gets a visual overhaul and a first pass at going responsive',
    },
    {
        headline: 'Dropabout Refactor + Redesign',
        copy: 'Dropbox’s internal employee catalog establishes a new visual language for internal apps',
    },
];
