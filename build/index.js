"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/json', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.get('/double/:number', (req, res) => {
    const number = Number(req.params.number);
    res.json({ result: number * 2 });
});
app.get('/average', (req, res) => {
    const n1 = Number(req.query.n1);
    const n2 = Number(req.query.n2);
    const n3 = Number(req.query.n3);
    res.json({ result: (n1 + n2 + n3) / 3 });
});
app.get('/sum/:n1/:n2/:n3', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const n3 = Number(req.params.n3);
    res.json({ result: n1 + n2 + n3 });
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
