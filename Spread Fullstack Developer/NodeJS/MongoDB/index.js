const express = require('express');
const bodyParser = require('body-parser');

const database = require('./config/database');

const useRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

useRoutes(app);
postRoutes(app);

app.get('/', (req, res) => { res.send('Hello World!'); })

app.listen(port, () => { console.log(`API running on port ${port}`); });

database.connect().then(() => {
});