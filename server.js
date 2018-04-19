//$ Server

/*========================================================
=            bringig stuffin and seting it up            =
========================================================*/

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
ejs = require('ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('views', './views')
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

/*=====  End of bringig stuffin and seting it up  ======*/

/*----------  Routs  ----------*/

const apiRouter = require('./routs/apiRouts.js')

app.use('/api', apiRouter);

app.get('/*', (req, res)=>{
	console.log('404');
	res.send("404");
})

/*----------  Listen  ----------*/
app.listen(port, function(){
	console.log(`up at ${port}`);
})