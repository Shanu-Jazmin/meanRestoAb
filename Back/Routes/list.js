const router= require("express").Router()

const List = require("../Model/List")
const verify = require("../Routes/verifyToken")

//getting all listing
router.get("/", async(req,res)=>{    //verify
  try{
      const list=await List.find()
      res.json(list)
  }
  catch(error){
      res.json({message:error})
  }
})

// //Add new listing
router.post("/", async(req,res)=>{
  const list=new List({
      name: req.body.name,
      add: req.body.add,
      email: req.body.email
  })

  try{
      const savedList = await list.save()
      res.send(savedList)
  }catch(error){
      res.status(400).send(error)
  }
})


// //single listing
router.get("/:listId", async(req,res)=>{
  try{
      const list=await List.findById(req.params.listId)
      res.json(list)
  }
  catch(error){
      res.json({message:error})
  }
})

// //update listing
router.put("/:listId", async (req,res)=>{
  try{
      const list={
        name: req.body.name,
        add: req.body.add,
        email: req.body.email
      }
      const updatedList=await List.findByIdAndUpdate({_id:req.params.listId},list)
      res.json(updatedList)
  }
  catch(error){
      res.json({message:error})
  }
})

// //delete listing
router.delete("/:listId", verify, async(req,res)=>{
  try{
      const removeList=await List.findByIdAndDelete(req.params.listId)
      res.json(removeList)
  }
  catch(error){
      res.json({message:error})
  }
})

module.exports=router
