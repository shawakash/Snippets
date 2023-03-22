const dotenv = require('dotenv');           // aquires the env package
dotenv.config({path: './config.env'});      // configures the file with the config.env
const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
// const postRouter = require('./routes/post');
const mainRouter = require('./routes/index');


// ---------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------


app.use(express.json());      // also a middle ware

const PORT = process.env.PORT;

// app.use('/post', postRouter)         // app.use(path, )   // app.use is used to call route  :: used to use middleware  // app.use is always written above app.get()  // whenever you call api with endpoint + path then app.use is executed here path is /post

// app.use('/auth', authRouter);

// Middle-ware is something that executes a common code whenever an api is called like if login api is called then the middleware should check the authentication then and there; then the middleware needs to specify the need step to be done after authentication.

// in case of middleware either a res.send/files is called or next is called based on programmer, if both written then the one above gets called and thereafter returns a error.

// to define middleware and controller at the same time use route.use('path', middleware/s, controller);

app.use((req, res, next)=>{          // middleware for no mount-path
    console.log(req.method, req.url, new Date().toTimeString());
    // any logic here suppose if logic specifies then we call next otherwise we exit
    next();
});
app.use('/api',mainRouter);      // instead of main routes you don't have to pass path

app.get('/', (req, res) => {
    res.send({
        data: 'ok',
    });
});

dbConnect();

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});