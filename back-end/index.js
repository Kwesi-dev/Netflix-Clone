const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const listRouter = require('./routes/lists')
const app = express();
const path = require('path')
dotenv.config();

app.use(express.json());

//connect to db
mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
})
.then(()=> console.log("DB connection successfull"))
.catch((err)=> console.log(err))

//routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/lists', listRouter);

app.use(express.static(path.join(__dirname, '/front-end/build')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/front-end/build', 'index.html'));
});
//port number
app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend server is running")
});