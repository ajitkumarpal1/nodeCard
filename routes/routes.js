var express = require('express');
const router = express.Router();

var userController = require('../src/user/userController');

router.get('/user', userController.getDataConntrollerFn);
router.post('/user/create',userController.createUserControllerFn);
router.put('/user/update/:id', userController.updateUserController);
router.delete('/user/delete/:id', userController.deleteUserController);

module.exports = router;