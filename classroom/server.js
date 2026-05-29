const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/posts.js");
//const cookieParser = require("cookie-parser")
const session = require("express-session");
const flash = require("connect-flash")
const path = require("path")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookies", (req, res) =>{
//     res.cookie("made-In", "India", {signed: true});
//     res.send("signed cookies sent");
// })

// app.get("/verify",(req, res) =>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })

// app.get("/getcookies", (req, res) =>{
//     res.cookie("greet", "hello");
//     res.cookie("MadeIn", "India");
//     res.send("send Some cookies!")//cookies send in name value pair
// });

// app.get("/greet", (req,res) =>{
//     let {name = "anonymous"} = req.cookies;
//     res.send(`hi ${name}`)
// })


// app.get("/", (req, res) =>{
//     console.dir(req.cookies);
//     res.send("hi i,m root")
// });

// app.use("/users", users)//jitne bhi callbacks user ke sath match hoga users coman hai to use  nikal liya gya
// app.use("/posts", posts)

const  sessionOptions = {
    secret: "mysupersecretstring", 
    resave: false, 
    saveUninitialized: true,
}

app.use(session(sessionOptions));// it use for creating sessions
app.use(flash());


// app.get("/test",(req, res) =>{
//     res.send("test successfull");
// })

// app.get("/reqcount",(req, res) =>{// its a res countsession count
//     if (req.session.count) {// req ke ander session count ko track karta hai
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
    
//     res.send(`You send a req ${req.session.count} times`);
// });

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");//better way to use flash
    res.locals.errorMsg =  req.flash("error")
    next();
})

app.get("/register", (req, res) =>{
    let { name = "anonymous" } = req.query;
    
    if (name == "anonymous") {
        req.flash("error", "user not registerd!");
    }else{
        req.flash("success","user registered successfully!")
    }
    req.session.name = name;
    res.redirect("/hello")// this is how store info in session if we changing page also
})

app.get("/hello",(req, res) =>{
    
    res.render("page.ejs",{name: req.session.name});
})

app.listen(3000, () =>{
    console.log("server is listening to 3000")
});