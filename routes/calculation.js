var express = require("express");
var Calculation = require("../models/Calculation");
var router = express.Router();

//save record
router.put("/save", async (req, res) => {
    let body = req.body;
    let calculation = new Calculation();
    calculation.ot = body.ot;
    calculation.ot_rate = body.ot_rate;
    calculation.ot_amount = body.ot_amount;
    calculation.basic_salary = body.basic_salary;
    calculation.pf = body.pf;
    calculation.hra_amount = body.hra_amount;
    calculation.conveyance = body.conveyance;
    calculation.gross_salary = body.gross_salary;
    calculation.esic = body.esic;
    calculation.pt = body.pt;
    calculation.salary_advance = body.salary_advance;
    calculation.deduction = body.deduction;
    calculation.net_payable_amount = body.net_payable_amount;
    calculation.months= body.months;
    calculation.years = body.years;
    calculation.presnt = body.present;
    calculation.absent = body.absent;

    calculation.save().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));

    });
    //let result = await admin.save();
    //res.end(JSON.stringify({status:"success", data:reslult}));
});


//update record
router.post("/update", async (req, res) => {
    let body = req.body;
    let calculation = await new Calculation();
    calculation.id = body.id;
    calculation.ot = body.ot;
    calculation.ot_rate = body.ot_rate;
    calculation.ot_amount = body.ot_amount;
    calculation.basic_salary = body.basic_salary;
    calculation.pf = body.pf;
    calculation.hra_amount = body.hra_amount;
    calculation.conveyance = body.conveyance;
    calculation.gross_salary = body.gross_salary;
    calculation.esic = body.esic;
    calculation.pt = body.pt;
    calculation.salary_advance = body.salary_advance;
    calculation.deduction = body.deduction;
    calculation.net_payable_amount = body.net_payable_amount;
    calculation.months= body.months;
    calculation.years = body.years;
    calculation.presnt = body.present;
    calculation.absent = body.absent;

    calculation.update().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });
});

//get list of records
router.get("/list", (req, res) => {
    let calculation = new Calculation();
    calculation.list().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

//get single record
router.get("/:id", (req, res) => {
    let calculation = new Calculation();
    calculation.id = req.params.id;
    calculation.get().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {

        res.end(JSON.stringify({ status: "failed", data: err }));

    });

});

//delete record
router.delete("/delete/:id", (req, res) => {
    let calculation = new Calculation();
    calculation.id = req.params.id;
    calculation.delete().then((result) => { 
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


module.exports = router;
