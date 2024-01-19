// Create web server with express
const express = require('express');
const app = express();
// Create router
const router = express.Router();
// Import path module
const path = require('path');
// Import body-parser module
const bodyParser = require('body-parser');
// Import cookie-parser module
const cookieParser = require('cookie-parser');
// Import error-handler module
const errorHandler = require('errorhandler');
// Import morgan module
const morgan = require('morgan');
// Import mongoose module
const mongoose = require('mongoose');
// Import express-session module
const session = require('express-session');
// Import connect-mongo module
const MongoStore = require('connect-mongo')(session);
// Import connect-flash module
const flash = require('connect-flash');
// Import express-validator module
const validator = require('express-validator');
// Import passport module
const passport = require('passport');
// Import config module
const config = require('./config/secret');
// Import ejs module
const ejs = require('ejs');
// Import ejs-mate module
const ejsMate = require('ejs-mate');
// Import multer module
const multer = require('multer');
// Import async module
const async = require('async');
// Import crypto module
const crypto = require('crypto');
// Import User model
const User = require('./models/user');
// Import Post model
const Post = require('./models/post');
// Import Category model
const Category = require('./models/category');
// Import Comment model
const Comment = require('./models/comment');
// Import Reply model
const Reply = require('./models/reply');

// Import routes
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const apiRoutes = require('./api/api');

// Connect to database
mongoose.connect(config.database, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log
    }
});
