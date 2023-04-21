var express = require("express");
var Category = require("../models/Category");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let category = new Category();
    category.name = body.name;
     category.save().then((result) => {
     res.end(JSON.stringify({ status: "success", data:result  }));
    }, (err) => {
         res.end(JSON.stringify({ status: "failed", data: err }));

    });
    //let result = await admin.save();
    //res.end(JSON.stringify({status:"success", data:reslult}));
});


//update record
router.post("/update", async (req, res)=>{
    let body = req.body;
       let category = await new Category();
       category.id = body.id;
       category.name = body.name;
       category.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records
router.get("/list", (req, res) => {
    let category = new Category();
    category.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//get single record
router.get("/:id", (req, res) => {
    let category = new Category();
    category.id = req.params.id;
    category.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//delete record
router.delete("/delete/:id", (req, res)=>{
    let category = new Category();
    category.id = req.params.id;
 category.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
