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

      const showstudent=(mail)=>{
        console.log('mail: ', mail);
        return db.student.find({ "email": mail } ).then(users=>{
            // console.log('users: ', users);
            if(users){

         
            return {
                statuscode:200,
                status: 'success',
                message:users
              }
            }

    })}

    const withdraw=(acno,amnt)=>{
      // var userDetails=this.userDetails;
      // console.log('userDetails: ', userDetails);
      var amount=parseInt(amnt)
      return db.student.findOne({email:acno}) //port 27017
      .then(user=>{
        if(user && user.fees>=amount && amount>0){
          
          user.fees-=amount;
        
          user.save();
          return{
            statuscode:200,
            status:true,
            message:`${amount} is paid ...balance due is ${user.fees}`
          }
        }
        else{
          return{
            statuscode:401,
            status:false,
            message:'please choose current amount'
          }
        }
      })
    }
    
  module.exports = {
  
    login,showstudent,withdraw

  }