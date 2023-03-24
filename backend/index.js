const express = require('express');
const app = express();
const cors = require('cors');
const { connection } = require('./config/db');
const { taskControler } = require('./Controller/task.router');
const { sprintControler } = require('./Controller/sprint.router');
const { userControler } = require('./Controller/user.router');

const port = process.env.PORT || 9001;
require('dotenv').config();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome my server');
});

app.use('/task', taskControler);
app.use('/user', userControler);
app.use('/sprint', sprintControler);

app.listen(port, async () => {
  try {
    await connection;
    console.log('Connected to Database');
  } catch (error) {
    console.log(error);
    console.log('Not connected');
  }
  console.log(`Listning at PORT ${port}`);
});
