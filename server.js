const express = require('express');
const routes = require('./routes');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes)

app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`server running on http://localhost:${PORT}`);
    }
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    () => console.log('connected to BD')
).catch(
    err => console.error(err, 'conncetion error')
)

const db = mongoose.connection;