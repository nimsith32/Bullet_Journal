const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const transactionRouter = require('./routes/transactions');
const todoRouter = require('./routes/todos');
const eventRouter = require('./routes/events');
const entryRouter = require('./routes/entries');

require('dotenv').config();

    
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use('/users', usersRouter);
app.use('/transactions', transactionRouter);
app.use('/todos', todoRouter);
app.use('/events', eventRouter);
app.use('/entries', entryRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


