let express = require('express'),
    corsMiddleware = require('./middlewares/corsHeader'),
    requestValidationMiddleware = require('./middlewares/requestValidation'),
    errorsRoutes = require('./errors'),
    authRoutes = require('./auth'),
    usersRoutes = require('./users'),
    apiVersionPath = '/api/v1';


module.exports = express.Router()
    .all('/*', [corsMiddleware.enableCORS])

    // log routes
    .post('/login', authRoutes.login)
    .post('/signin', authRoutes.signin)

    // auth middleware, token validation
    //.all(apiVersionPath + '/*', [requestValidationMiddleware])

    // users
    .get('/api/v1/admin/users', usersRoutes.getUsers)
    .post('/api/v1/admin/users', usersRoutes.createUser)
    .get('/api/v1/admin/user/:username', usersRoutes.getUser)
    .put('/api/v1/admin/user/:username', usersRoutes.updateUser)
    .delete('/api/v1/admin/user/:username', usersRoutes.deleteUser)

    .use(errorsRoutes.error404)
    .use(errorsRoutes.errorHandler);
