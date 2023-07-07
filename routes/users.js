const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.post('/create-project',userController.createProject)

router.get('/project/:id',userController.projects);

router.post('/create-issue',userController.createIssue);

router.get('/:id',userController.showAllIssue);
 
router.post('/getIssue',userController.getIssue)







module.exports = router;