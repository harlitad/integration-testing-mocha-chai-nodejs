const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require('./app/routes')

app.use(express.json())
app.use(indexRouter)

app.listen(port, () => console.log(`Server run in ${port}`));

module.exports = app