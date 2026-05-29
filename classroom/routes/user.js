const express = require("express")
const router = express.Router()

// User
// index
router.get("/", (req, res) =>{
    res.send("Get for users")
})

// show 
router.get("/:id",(req,res) =>{
    res.send("Get for user id")
})

//post 
router.post("/",(req, res) => {
    res.send("post for users");
})

//delete 
router.delete("/:id",(req, res) =>{
    res.send("delete the users")
});

module.exports = router