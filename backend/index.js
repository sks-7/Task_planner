const express = require('express');
const app = express();
const cors = require('cors');
const { connection } = require('./config/db');
const { sprintController } = require('./routers/sprint');
const { userController } = require('./routers/user');
const { taskController } = require('./routers/task');

const port = process.env.PORT || 8080;
require('dotenv').config();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome my server');
});

app.use('/sprint', sprintController);
app.use('/user', userController);
app.use('/task', taskController);

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
