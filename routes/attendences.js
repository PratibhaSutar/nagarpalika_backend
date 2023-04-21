var express = require("express");
var Attendences = require("../models/Attendences");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let attendences = new Attendences();
    attendences.category_id = body.category_id;
    attendences.employee_details_id = body.employee_details_id;
    attendences.name = body.name;
    attendences.mobile_no = body.mobile_no;
    attendences.date = body.date;
    attendences.present = body.present;
    attendences.absent = body.absent;


    attendences.attendence = body.attendence;
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
       attendences.date = body.date;
       attendences.name = body.name;
       attendences.mobile_no = body.mobile_no;
       attendences.present = body.present;
    attendences.absent = body.absent;
       attendences.attendence = body.attendence;
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
// router.get("/lists/:category_id", (req, res) => {
//     let attendences = new Attendences();
//     attendences.category_id = req.params.category_id;
//     attendences.lists().then((result) => {
//         res.end(JSON.stringify({ status: "success", data: result }));
//     }, (err) => {

//         res.end(JSON.stringify({ status: "failed", data: err }));

//     });
    
// });
// //get single record
// router.get("/:category_id/:id", (req, res) => {
//     let attendences = new Attendences();
//     attendences.id = req.params.id;
//     attendences.get().then((result) => {
//         res.end(JSON.stringify({ status: "success", data: result }));
//     }, (err) => {

//         res.end(JSON.stringify({ status: "failed", data: err }));

//     });
    
// });
// router.get("/:category_id/:id",(req,res)=>{
//     employee_details.findById(req.params.id).then((result)=>{   
//         res.end(JSON.stringify({status:"success", data:result}));
//     },(err)=>{
//         res.end(JSON.stringify({status:"failed", data:err}));
//     })
// });
// router.get("/:employee_details_id/:id", (req, res) => {

//     let attendences = new Attendences();
//     attendences.id = req.params.id;
//     attendences.list().then((result) => {
//         res.end(JSON.stringify({ status: "success", data: result }));
//     }, (err) => {

//         res.end(JSON.stringify({ status: "failed", data: err }));

//     });
    
// });

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
