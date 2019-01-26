// ----- NPM MODULES
const app = require('express')();
const bodyParser = require('body-parser');

// ----- ROUTER MODULES
const PublicUserRouter = require('./routes/public_user');
const PrivateUserRouter = require('./routes/private_user');
const PublicPostRouter = require('./routes/public_post');
const PrivatePostRouter = require('./routes/private_post');
const PublicCommentRouter = require('./routes/public_comment');
const PrivateCommentRouter = require('./routes/private_comment');

// ----- GLOBAL VARIABLES
const port = 11235;

// ----- MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', PublicUserRouter);
app.use('/user', PrivateUserRouter);
app.use('/post', PublicPostRouter);
app.use('/post', PrivatePostRouter);
app.use('/comment', PublicCommentRouter);
app.use('/comment', PrivateCommentRouter);

// ----- RUNNING SERVER FUNCTION
app.listen(port, () => {
    console.log(`App currently running on port #${port}`);
});
