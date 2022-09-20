import express from 'express';

const router = express.Router();

const users = [
   {
        firstname: "john",
        lastname: "doe",
        age: 25
   },
   {
     firstname : "jane",
     lastname : "doe",
     age : 24
    }
]

router.get('/',( req, res) =>{
    console.log(users);
    res.send(users);
});


router.post('/',(req,res) => {
console.log('POST ROUTE REACHED'); 

const user = req.body;

users.push(user);

 res.send(`User with the name ${user.firstname} added to the database!`);
})

export default router;