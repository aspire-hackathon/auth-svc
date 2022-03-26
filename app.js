const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
app.use(helmet());

//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = 8080;

app.use('/', (req, res) => {
  res.send('Auth Server OK!!!');
})

require('./src/db/dbConnect');

app.listen(port, () => {
  console.log('Auth server listening at port- ', port);
});
