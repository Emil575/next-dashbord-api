"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const routes_1 = __importDefault(require("../routes"));
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded());
    app.use((0, cors_1.default)({ origin: ['http://localhost:3001'], credentials: true }));
    app.use((0, express_session_1.default)({ secret: 'hannesEmilIstCool', resave: false, saveUninitialized: false, cookie: { maxAge:  } }));
    app.use('/api', routes_1.default);
    return app;
}
exports.createApp = createApp;
