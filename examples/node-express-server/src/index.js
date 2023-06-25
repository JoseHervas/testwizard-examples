import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import addTwoNumbers from './addTwoNumbers';

const app = express();

app.use(cors());

app.post('/add', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  res.send(addTwoNumbers(num1, num2));
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
