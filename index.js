// ----- NPM MODULES
const app = require('express')();
const bodyParser = require('body-parser');

// ----- ROUTER MODULES
const PublicUserRouter = require('./routes/public_user');
const PublicPostRouter = require('./routes/public_post');
const PublicCommentRouter = require('./routes/public_comment');
const PrivateUserRouter = require('./routes/private_user');

// ----- GLOBAL VARIABLES
const port = 11235;

// ----- MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', PublicUserRouter);
app.use('/user', PrivateUserRouter);
app.use('/post', PublicPostRouter);
app.use('/comment', PublicCommentRouter);

// ----- RUNNING SERVER FUNCTION
app.listen(port, () => {
    console.log(`App currently running on port #${port}`);
});
