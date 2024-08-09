import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'mutualfund_user',
  host: 'localhost',
  database: 'mutualfunds',
  password: 'password',
  port: 5432,
});

app.get('/api/mutualfunds', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mutualfunds');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
