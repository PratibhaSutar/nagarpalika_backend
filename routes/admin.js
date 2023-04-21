var express = require("express");
var Admin = require("../models/Admin");

var router = express.Router();

//router.put("/", async (req, res)=>{
// router.post("/save", (req, res) => {

//     let body = req.body;
//     let admin = new Admin();
//    admin.email = body.email;
//     admin.password = body.password;
//     admin.save().then((result) => {
//         let body = req.body;
    
//         if(body.email == "admin@gmail.com" && body.password == "admin")
//         {
//             res.end(JSON.stringify({ status: "success", data:{email:body.email, password:body.password }}));
        
//         }
//         else{
//             res.end(JSON.stringify({ status: "failed", data:"Invalid email or password"}));
        
//         }});
//     });

  router.post("/login", (req, res) => {

        let body = req.body;
            if(body.email == "admin@gmail.com" && body.password == "admin")
            {
                res.end(JSON.stringify({ status: "success", data:{name:"admin", email:body.email, password:body.password }}));
            
            }
            else{
                res.end(JSON.stringify({ status: "failed", data:"Invalid Email or Password"}));
            
        }
        });

        router.put("/save",  async(req, res) => {
            let body = req.body;
            
                let admin = new Admin();
                admin.email = body.email;
                admin.password = body.password;

                admin.save().then((result) => {
                    if(body.email == "admin@gmail.com" && body.password == "admin")
                {
                    res.end(JSON.stringify({ status: "success", data:{name:"admin", email:body.email, password:body.password }}));
                
                }
                else{
                    res.end(JSON.stringify({ status: "failed", data:"Invalid Email or Password"}));
                
            }           //let result = await admin.save();
            //res.end(JSON.stringify({status:"success", data:reslult}));
        });
    });
    
module.exports = router;