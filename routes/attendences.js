var express = require("express");
var Attendences = require("../models/Attendences");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let attendences = new Attendences();
    attendences.startdate = body.startdate;
    attendences.category_id = body.category_id;
    attendences.name = body.name;
    attendences.present = body.present;
    attendences.absent = body.absent;
    
     attendences.save().then((result) => {
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
       let attendences = await new Attendences();
    attendences.id = body.id;
    attendences.startdate = body.startdate;
    attendences.category_id = body.category_id;
    attendences.name = body.name;
    attendences.present = body.present;
    attendences.absent = body.absent;
       attendences.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records
router.get("/list", async (req, res) => {
    let attendences = await new Attendences();
    // attendences.category_id = req.params.category_id;
    attendences.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});
//delete record
router.delete("/delete/:id", (req, res)=>{
    let attendences = new Attendences();
    attendences.id = req.params.id;
 attendences.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
