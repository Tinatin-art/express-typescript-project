import express from 'express';

const userRouter = express.Router()



userRouter.use((req, res, next) => {
    console.log('users eventlistener');
    next()
});

userRouter.get('/login', (req, res) => {
    res.send('login');
});

userRouter.get('/register', (req, res) => {
    res.send('reqister');
});

export {userRouter}