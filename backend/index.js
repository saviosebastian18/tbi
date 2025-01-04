const express = require('express')
const mongoose =require('mongoose')
const cors= require('cors')
const UserModel =require('./models/Users')

const app =express()
app.use(cors())
app.use(express.json())

 mongoose.connect("mongodb://127.0.0.1:27017/crud")
 .then(()=>{
     console.log("MongoDB Connected Successfully!");
     app.listen(3001,()=>{
         console.log("Server running at port 3001");
     })})
//     app.listen(3001,()=>{
//         console.log("Server running at port 3001");
//     })
// }
// )
 .catch((err)=>{
    console.log("Error in connecting!");
    console.log(err);
})
app.get('/',(req,res) => {
   UserModel.find({})
   .then(users => res.json(users))
   .catch(err => res.json(err))
})


app.get('/getUser/:id' ,(req,res) => {
  const id =req.params.id;
   UserModel.findById({_id:id})
   .then(users => res.json(users))
   .catch(err => res.json(err))
}
)
app.put('/updateUser/:id' ,(req,res) => {
    const id =req.params.id;
     UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
     })
     .then(users => res.json(users))
     .catch(err => res.json(err))
  }
  )
  app.delete('/deleteUser/:id', (req,res)  =>{
    const id =req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  })


app.post("/createUser",(req,res)=>{
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.age)
    UserModel.create(req.body)
    // .then(users => res.json(users))
    // .catch(err => res.json(err))
    .then(res.json("Message received from frontend!"));
 })

// )
// app.listen(3001,()=>{
//             console.log("Server running at port 3001");
//         })