"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        const dbURI = process.env.DATABASE_URL;
        if (!dbURI) {
            throw new Error('DATABASE_URL is not defined in environment variables.');
        }
        const client = new pg_1.Client({
            connectionString: dbURI,
        });
        await client.connect();
        console.log('Database connected...');
    }
    catch (err) {
        console.error('Database connection failed:');
        process.exit(1);
    }
};
exports.connectDB = connectDB;
