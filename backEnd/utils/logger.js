"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const log = ({ message }) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
};
exports.log = log;
