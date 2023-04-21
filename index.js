var express =  require("express");
var bodyparser = require("body-parser");
var fs = require("fs");

var app = express();

app.use(bodyparser.json({limit:"50mb"}));// file size can be big.so this setting is done.
app.use(bodyparser.urlencoded({limit:'50mb', extended:true}));
app.use(express.json());// comming json data setting

app.use(express.static("public"));


app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "POST ,GET ,PUT ,PATCH ,DELETE");
        return res.status(200).json({})
       }
       next();
});

app.get("/", (req, res)=>{
    res.end("Welcome to backend");

});

app.use("/category" ,require("./routes/category"));
app.use("/employee_details", require("./routes/employee_details"));
app.use("/advance_payment" ,require("./routes/advance_payment"));
app.use("/admin" ,require("./routes/admin"));
app.use("/employee_wages", require("./routes/employee_wages"));
app.use("/attendences", require("./routes/attendences"));
app.use("/salary", require("./routes/salary"));
app.use("/setting", require("./routes/setting"));
app.use("/calculation", require("./routes/calculation"));
app.use("/drivers", require("./routes/drivers"));






app.listen(8081, ()=>{
    console.log("Project is running on https://localhost:8081/");
})