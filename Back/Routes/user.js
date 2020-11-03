const router = require("express").Router()
const User = require("../Model/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

router.post("/register", async (req,res)=>{
  //checking user email id in database
  const emailExit = await User.findOne({email:req.body.email})

  if(emailExit)
  return res.status(400).send("Email already exists")

  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.pass,salt)

   //create new user
   const user = new User({
    user:req.body.user,
    email:req.body.email,
    pass:hashedPassword
    })

try {
  const savedUser = await user.save()
  res.send(savedUser)
} catch (error) {
  res.status(400).send(error)
}
})

//user login
router.post("/login", async(req,res)=>{

  //checking user email id in database
  const user=await User.findOne({email:req.body.email})
  if(!user)
  return res.status(400).send("Email is wrong")

  //checking password
  const validPass =await bcrypt.compare(req.body.pass,user.pass)
  if(!validPass)
  return res.status(400).send("Invalid password")

  //create & assign a token
  const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
  res.header("auth-token",token).send({token:token})

  res.send("User Logged In")
})

module.exports=router
