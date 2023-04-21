var express = require("express");
var Employee_wages = require("../models/Employee_wages");
const Attendences = require("../models/Attendences");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let employee_wages = new Employee_wages();
    employee_wages.category_id = body.category_id;
    employee_wages.employee_details_id = body.employee_details_id;

    // employee_wages.bank_acno = body.bank_acno;
    // employee_wages.ifsc_code = body.ifsc_code;
    employee_wages.pd = body.pd;
    employee_wages.ot = body.ot;
    employee_wages.ot_rate = body.ot_rate;
    employee_wages.ot_amount = body.ot_amount;
    employee_wages.gross_amount = body.gross_amount;
    employee_wages.advance = body.advance;
    employee_wages.pf = body.pf;

    employee_wages.total_deduction = body.total_deduction;
    employee_wages.remark = body.remark;

    employee_wages.save().then((result) => {
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
       let employee_wages = await new Employee_wages();
    employee_wages.id = body.id;
    // employee_wages.bank_acno = body.bank_acno;
    // employee_wages.ifsc_code = body.ifsc_code;
    employee_wages.pd = body.pd;
    employee_wages.ot = body.ot;
    employee_wages.ot_rate = body.ot_rate;
    employee_wages.ot_amount = body.ot_amount;
    employee_wages.gross_amount = body.gross_amount;
    employee_wages.advance = body.advance;
    employee_wages.pf= body.pf;

    employee_wages.total_deduction = body.total_deduction;
    employee_wages.remark = body.remark;

       employee_wages.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records
router.get("/list", (req, res) => {
    let employee_wages = new Employee_wages();
    // employee_wages.category_id = req.params.category_id;
    employee_wages.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});
// router.get("/category_id/:employee_details_id", (req, res) => {
//     let attendences = new Attendences();
//     attendences.employee_details_id = req.params.employee_details_id;
//     attendences.getlist().then((result) => {
//         res.end(JSON.stringify({ status: "success", data: result }));
//     }, (err) => {

//         res.end(JSON.stringify({ status: "failed", data: err }));

//     });
    
// });

//get single record
router.get("/:category_id/:id", (req, res) => {
    let employee_wages = new Employee_wages();
    employee_wages.id = req.params.id;
    employee_wages.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//delete record
router.delete("/delete/:id", (req, res)=>{
    let employee_wages = new Employee_wages();
    employee_wages.id = req.params.id;
 employee_wages.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
