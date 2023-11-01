"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = void 0;
const sqlconfig_1 = require("../configuration/sqlconfig");
const mssql_1 = __importDefault(require("mssql"));
async function dbService() {
    try {
        let pool = await new mssql_1.default.ConnectionPool(sqlconfig_1.sqlConfig);
        return pool;
    }
    catch (error) {
        console.log(error);
    }
}
exports.dbService = dbService;
