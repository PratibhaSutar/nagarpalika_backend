var express = require("express");
var Employee_details = require("../models/Employee_details");
var router = express.Router();

//save record
router.put("/save",  async(req, res) => {
    let body = req.body;
    let employee_details = new Employee_details();
    employee_details.category_id = body.category_id;
    employee_details.name = body.name;
    employee_details.mobile_no = body.mobile_no;
    employee_details.bank_acno = body.bank_acno;
    employee_details.ifsc_code = body.ifsc_code;
    employee_details.uan_no = body.uan_no;
    employee_details.esic_icno = body.esic_icno;
    employee_details.basic_salary = body.basic_salary;
    employee_details.conveyance = body.conveyance;
    employee_details.hra = body.hra;
    employee_details.address = body.address;
    employee_details.date = body.date;


    employee_details.save().then((result) => {
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
       let employee_details = await new Employee_details();
    employee_details.id = body.id;
       employee_details.name = body.name;
       employee_details.mobile_no = body.mobile_no;
    employee_details.bank_acno = body.bank_acno;
    employee_details.ifsc_code = body.ifsc_code;
    employee_details.uan_no = body.uan_no;
    employee_details.esic_icno = body.esic_icno;
    employee_details.basic_salary = body.basic_salary;
    employee_details.conveyance = body.conveyance;
    employee_details.hra = body.hra;
    employee_details.address = body.address;
    employee_details.date = body.date;


       employee_details.update().then((result)=>{
       res.end(JSON.stringify({status:"success", data:result}));
       }, (err)=>{
   
           res.end(JSON.stringify({status:"failed", data:err}));
   
   });
   });

//get list of records

router.get("/list", (req, res) => {
    let employee_details = new Employee_details();
    // employee_details.category_id = req.params.category_id;
    employee_details.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});
router.get("/list/:category_id", (req, res) => {
    let employee_details = new Employee_details();
    employee_details.category_id = req.params.category_id;
    employee_details.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});



//get single record
router.get("/:category_id/:id", (req, res) => {
    let employee_details = new Employee_details();
    employee_details.id = req.params.id;
    employee_details.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    
});

//delete record
router.delete("/delete/:id", (req, res)=>{
    let employee_details = new Employee_details();
    employee_details.id = req.params.id;
 employee_details.delete().then((result)=>{
     res.end(JSON.stringify({status:"success", data:result}));
     }, (err)=>{
     res.end(JSON.stringify({status:"failed", data:err}));
    });
});


module.exports = router;
