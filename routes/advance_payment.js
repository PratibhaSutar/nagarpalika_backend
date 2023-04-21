var express = require("express");
var Advance_payment = require("../models/Advance_payment");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let advance_payment = new Advance_payment();
    advance_payment.date = body.date;
    advance_payment.category_id = body.category_id;

    advance_payment.employee_details_id = body.employee_details_id;
    advance_payment.advance_payment = body.advance_payment;
     advance_payment.save().then((result) => {
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
       let advance_payment = await new Advance_payment();
    advance_payment.id = body.id;
    advance_payment.advance_payment = body.advance_payment;
    advance_payment.date = body.date;
       advance_payment.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records
router.get("/list", (req, res) => {
    let advance_payment = new Advance_payment();
    // advance_payment.advance_payment_details_id = req.params.advance_payment_details_id;
    advance_payment.list().then((result) => {
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
router.get("/:advance_payment_details_id/:id", (req, res) => {
    let advance_payment = new Advance_payment();
    advance_payment.id = req.params.id;
    advance_payment.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//delete record
router.delete("/delete/:id", (req, res)=>{
    let advance_payment = new Advance_payment();
    advance_payment.id = req.params.id;
 advance_payment.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
