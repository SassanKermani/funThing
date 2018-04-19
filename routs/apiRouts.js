/*========================================================
=            bringig stuffin and seting it up            =
========================================================*/

const express = require('express');
const router = express.Router();

const controller = require("../controllers/apiController.js")

/*=====  End of bringig stuffin and seting it up  ======*/

/*=============================
=            Routs            =
=============================*/

//defult
router.get('/', (req, res)=>{
	console.log("/")
	res.send(apiEndpoints);
})

//verify user
router.post('/verifyUser', controller.verifyUser);


/*=====  End of Routs  ======*/

/*----------  usefull vars  ----------*/
const apiEndpoints = {
	"ayyy" : "nothing yet come back later"
}

/*----------  Sending it back to the server   ----------*/
module.exports = router;