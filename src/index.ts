import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/json', (req, res) => { // http://localhost:3000/json
	res.json({ message: 'Hello World!' });
});

app.get('/double/:number', (req, res) => { // http://localhost:3000/double/5
	const number = Number(req.params.number);
	res.json({ result: number * 2 });
});

app.get('/average', (req, res) => { // http://localhost:3000/average?n1=1&n2=2&n3=3
	const n1 = Number(req.query.n1);
	const n2 = Number(req.query.n2);
	const n3 = Number(req.query.n3);
	res.json({ result: (n1 + n2 + n3) / 3 });
});

app.get('/sum/:n1/:n2/:n3', (req, res) => { // http://localhost:3000/sum/1/2/3
	const n1 = Number(req.params.n1);
	const n2 = Number(req.params.n2);
	const n3 = Number(req.params.n3);
	res.json({ result: n1 + n2 + n3 });
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});