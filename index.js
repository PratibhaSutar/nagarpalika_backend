var express =  require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(express.json());// comming json data setting
app.use(bodyparser.json({limit:"50mb"}));// file size can be big.so this setting is done.
app.use(bodyparser.urlencoded({limit:"50mb", extended:true}));
app.use(express.static("assets"));

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

app.use("/admin" ,require("./routes/admin"));

app.listen(8081, ()=>{
    console.log("Project is running on https://localhost:8081/");
})