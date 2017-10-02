const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// require our routers
const routes = require('./routes/routes');

// create express app
const app = express();

// tell express to use handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', './views');
app.set('view engine', 'handlebars');

// tell express how to serve static files
app.use(express.static('public'));

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configure our routers
app.use('/', routes);

// start the app
app.listen(3000, () => console.log('ready to roll!!'));
