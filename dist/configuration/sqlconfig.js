"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
const mssql_1 = __importDefault(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sqlConfig = {
    user: 'sa',
    password: 'honest',
    database: 'NOTEBOOKS',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
async function TestConnection() {
    const pool = await mssql_1.default.connect(exports.sqlConfig);
    if (pool.connected) {
        console.log('connected to db');
    }
}
TestConnection();
