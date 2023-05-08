var express = require("express");
var Salary = require("../models/Salary");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let salary = new Salary();
    salary.category_id = body.category_id;
    salary.employee_details_id = body.employee_details_id;
    salary.date = body.date;  
    salary.days = body.days;
    salary.pf = body.pf;
    salary.pt = body.pt;
    salary.esic = body.esic;
    salary.salary = body.salary;
    salary.ot = body.ot;
    salary.advance_amount = body.advance_amount;
    salary.net_salary = body.net_salary;
    salary.paid_amount = body.paid_amount;
    salary.outstanding_amount = body.outstanding_amount;


     salary.save().then((result) => {
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
       let salary = await new Salary();
    salary.id = body.id;
    salary.date = body.date;  
    salary.days = body.days;
    salary.pf = body.pf;
    salary.pt = body.pt;
    salary.esic = body.esic;
    salary.salary = body.salary;
    salary.ot = body.ot;
    salary.advance_amount = body.advance_amount;
    salary.net_salary = body.net_salary;
    salary.paid_amount = body.paid_amount;
    salary.outstanding_amount = body.outstanding_amount;

       salary.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records
router.get("/list", (req, res) => {
    let salary = new Salary();
    // salary.salary_details_id = req.params.salary_details_id;
    salary.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//get single record
router.get("/:salary_details_id/:id", (req, res) => {
    let salary = new Salary();
    salary.id = req.params.id;
    salary.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//delete record
router.delete("/delete/:id", (req, res)=>{
    let salary = new Salary();
    salary.id = req.params.id;
 salary.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
