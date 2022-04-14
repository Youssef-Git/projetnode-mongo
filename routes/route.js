const express = require('express');
const usercontroller = require('../controller/usercontroller');
const services = require('../services/render');

exports.router = (function() {
    const router = express.Router()

   /**
 *  @description Root Route
 *  @method GET /
 */
router.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
router.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get('/update-user', services.update_user)

// API
router.post('/api/users', usercontroller.create);
router.get('/api/users', usercontroller.find);
router.put('/api/users/:id', usercontroller.update);
router.delete('/api/users/:id', usercontroller.delete)

    return router
})()



