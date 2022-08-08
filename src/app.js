/* eslint-disable radix */
const express = require('express');
// const { add } = require('./lib/numbers');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('./lib/numbers');

const app = express();

//**JSON parsing middleware, so req.body gets converted into JS object (so don't need to convert data types)
app.use(express.json());

app.get('/strings/hello/:word', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.word) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/count-characters/:string', (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const { length } = req.query;
  let result;
  if (length) {
    result = firstCharacters(req.params.string, length);
  } else {
    result = firstCharacter(req.params.string);
  }
  res.status(200).json({ result });
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const number1 = +req.params.num1;
  const number2 = +req.params.num2;
  if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
    res.status(200).json({ result: add(number1, number2) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  const number1 = +req.params.num1;
  const number2 = +req.params.num2;
  if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
    res.status(200).json({ result: subtract(number2, number1) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!Number.isNaN(+a) && !Number.isNaN(+b)) {
    res.status(200).json({ result: multiply(a, b) });
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  if (!Number.isNaN(+a) && !Number.isNaN(+b)) {
    if (b !== 0) {
      res.status(200).json({ result: divide(a, b) });
    } else {
      res.status(400).json({ error: 'Unable to divide by 0.' });
    }
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  if (!Number.isNaN(+a) && !Number.isNaN(+b)) {
    if (b !== 0) {
      res.status(200).json({ result: remainder(a, b) });
    } else {
      res.status(400).json({ error: 'Unable to divide by 0.' });
    }
  } else if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

module.exports = app;
