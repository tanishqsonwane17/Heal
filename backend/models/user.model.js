import mongoose from "mongoose";

const userScheam = new mongoose.Schema({
   username:{
       type: String,
       required: true,
   },
   email:{
       type: String,
       required: true,
       unique: true
   },
   password:{
       type: String,
       required: true
   },
   age:{
       type: Number,
       required: true
   },
   isAdmin:{
       type: Boolean,
       default: false
   },
   height:{
       type: Number,
       required: true
   },
   weight:{
       type: Number,
       required: true
   },
   gender:{
       type: String,
       required: true,
       enum: ['male', 'female']
   }
})

const userModel = mongoose.model('user', userScheam)
export default userModel