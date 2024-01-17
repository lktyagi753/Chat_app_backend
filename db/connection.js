const mongoose = require('mongoose');
require('dotenv').config()

const url = process.env.MONGO_URI

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((err) => console.log(err))