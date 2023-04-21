var express = require("express");
var Drivers = require("../models/drivers");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let drivers = new Drivers();
    drivers.name = body.name;
    drivers.category_id = body.category_id;
    drivers.advance_payment = body.advance_payment;
     drivers.save().then((result) => {
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
        // let coursevideo = await Coursevideo.findById(body.id);

       let drivers = await new Drivers();
    drivers.id = body.id;
    drivers.advance_payment = body.advance_payment;
    drivers.name = body.name;
       drivers.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records
router.get("/list", (req, res) => {
    let drivers = new Drivers();
    drivers.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});
// router.get("/list/:advance_payment_details_id", (req, res) => {
//     let advance_payment = new Advance_payment();
//     advance_payment.advance_payment_details_id = req.params.advance_payment_details_id;
//     advance_payment.list().then((result) => {
//         res.end(JSON.stringify({ status: "success", data: result }));
//     }, (err) => {

//         res.end(JSON.stringify({ status: "failed", data: err }));

//     });
    
// });

//get single record
router.get("/:drivers/:id", (req, res) => {
    let drivers = new Drivers();
    drivers.id = req.params.id;
    drivers.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//delete record
router.delete("/delete/:id", (req, res)=>{
    let drivers = new Drivers();
    drivers.id = req.params.id;
 drivers.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
