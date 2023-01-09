const db =require('./db')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

const login =(acno,pswd) =>{
    console.log(pswd,acno);
      return db.student.findOne({email:acno,password:pswd}).then( user =>{
    
      
        // console.log('pswd: ', pswd);
        // console.log(acno)
        // console.log(userDetails)
       
        if(user){
          // console.log('user: ',);
     
          // console.log(acno);
          // // console.log(acno)
          // if(pswd==userDetails[acno]['password'])
          //  currentUser=userDetails[acno]['username']
          //  currentAcno=userDetails[acno].acno
          // key=require('crypto').randomBytes(32).toString('hex')
          // const token = jwt.sign(acno,key)
          const token = jwt.sign(acno,'shajmil2022')
           return {
           currentuser: user.username,
            statuscode:200,
            status: 'success',
            message:' account login sucess',
            acno,
          token
          }
           
          
          }
          else{
            return {
              statuscode:401,
              status: 'fail',
              message:'  password incorrect'
            }
          }
       
        
        // else{
        //   return {
        //     statuscode:401,
        //     status: 'fail',
        //     message:' user not found'
        //   
        // 
       
       
      })}

      
  module.exports = {
  
    login,

  }