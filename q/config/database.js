const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`MongoDB connected on ${db.host}:${db.port}`);
});