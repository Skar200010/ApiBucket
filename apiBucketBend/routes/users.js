var express = require('express');
var router = express.Router();

/* GET users listing. */
const authentication = require('../middleware/authenticate')
const userController = require('../controllers/usercontroller');
const apicodepost = require('../controllers/apiCodeController')

router.post('/register',userController.register);
router.post('/login', userController.login);
router.post('/logout',userController.logout)
router.get('/profile',authentication.authenticateToken,userController.profile)

router.post('/apicode',apicodepost.apicodepost)
module.exports = router;
