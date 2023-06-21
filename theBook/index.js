const express = require('express');
const bookRouter = require('./router/bookRouter');

const application  = express();

application.use('/api/v1/book',bookRouter);

application.listen(5000, () => {
    console.log('application is running on port 5000');
})