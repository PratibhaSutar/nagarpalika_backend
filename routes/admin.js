var express = require("express");
var Admin = require("../models/Admin");

var router = express.Router();

//router.put("/", async (req, res)=>{
router.put("/save", (req, res)=>{

let body = req.body;
    let admin = new Admin();
    admin.name = body.name;
    admin.document1 = body.document1;
    admin.document2 = body.document2;
    admin.document3 = body.document3;
    admin.document4 = body.document4;


   admin.save().then((result)=>{
res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{

        res.end(JSON.stringify({status:"failed", data:err}));

});
   //let result = await admin.save();
   //res.end(JSON.stringify({status:"success", data:reslult}));
});


router.get("/", (req, res)=>{
let admin = new Admin();
    admin.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
            }, (err)=>{
        
                res.end(JSON.stringify({status:"failed", data:err}));
        
        });
           //let result = await admin.save();
           //res.end(JSON.stringify({status:"success", data:reslult}));
        });

        router.get("/:id", (req, res)=>{
            let admin = new Admin();
            admin.id = req.params.id;
                admin.get().then((result)=>{
                    res.end(JSON.stringify({status:"success", data:result}));
                        }, (err)=>{
                    
                            res.end(JSON.stringify({status:"failed", data:err}));
                    
                    });
                       //let result = await admin.save();
                       //res.end(JSON.stringify({status:"success", data:reslult}));
                    });
    
module.exports = router;