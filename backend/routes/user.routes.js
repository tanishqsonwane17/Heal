import express from 'express';
import {  loginController, registerController } from '../controller/user.controller.js';
import { body } from 'express-validator';
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post( '/register',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('age').isNumeric().withMessage('Age must be a number'),
    body('height').isNumeric().withMessage('Height must be a number'),
    body('weight').isNumeric().withMessage('Weight must be a number'),
  ],
  registerController
);

router.post('/login', loginController);
router.get('/home',isAuthenticated,(req,res)=>{
  res.send('home');
  console.log('user is authenticated');
})
export default router;

