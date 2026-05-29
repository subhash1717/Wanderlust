const express = require("express")
const router = express.Router()



// Posts
// index
router.get("/", (req, res) =>{
    res.send("Get for Posts")
})

// show 
router.get("/:id",(req,res) =>{
    res.send("Get for Posts id")
})

//post - posts
router.post("/",(req, res) => {
    res.send("post for Posts");
})

//delete - users
router.delete("/:id",(req, res) =>{
    res.send("delete the Posts")
});

module.exports = router;