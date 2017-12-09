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
    .get(apiVersionPath + '/admin/users', usersRoutes.getUsers)
    .post(apiVersionPath + '/admin/users', usersRoutes.createUser)
    .get(apiVersionPath + '/admin/user/:username', usersRoutes.getUser)
    .put(apiVersionPath + '/admin/user/:username', usersRoutes.updateUser)
    .delete(apiVersionPath + '/admin/user/:username', usersRoutes.deleteUser)

    /**
     // images
     .get(apiVersionPath + '/admin/images', imagesRoutes.getImages)
     .post(apiVersionPath + '/admin/images', imagesRoutes.createImage)
     .get(apiVersionPath + '/admin/image/:name', imagesRoutes.getImage)
     .put(apiVersionPath + '/admin/image/:name', imagesRoutes.updateImage)
     .delete(apiVersionPath + '/admin/image/:name', imagesRoutes.deleteImage)
     **/


    .use(errorsRoutes.error404)
    .use(errorsRoutes.errorHandler);
