var express = require("express");
var Setting = require("../models/Setting");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let setting = new Setting();
    setting.ot_rate = body.ot_rate;
     setting.save().then((result) => {
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
       let setting = await new Setting();
       setting.id = body.id;
       setting.ot_rate = body.ot_rate;
       setting.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records
router.get("/list", (req, res) => {
    let setting = new Setting();
    setting.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//get single record
router.get("/:id", (req, res) => {
    let setting = new Setting();
    setting.id = req.params.id;
    setting.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//delete record
router.delete("/delete/:id", (req, res)=>{
    let setting = new Setting();
    setting.id = req.params.id;
 setting.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
