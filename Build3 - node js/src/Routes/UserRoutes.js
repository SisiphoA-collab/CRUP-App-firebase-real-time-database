const express = require('express');
const user = require('../controllers/userController')

const router = express.Router()

//endpoints
router.get('/', user.getUsers);
router.post('/createUser', user.createUser);
router.get('/userByID', user.getUserByID);
router.delete('/deleteUser', user.deleteUser);
router.put('/updateUser', user.updateUser);

module.exports = router;
