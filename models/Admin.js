var Database = require("./Database");
class Admin{
    constructor(){
        this.id = 0;
        this.name = "";
        this.document1="";
        this.document2="";
        this.document3="";
        this.document4="";
        this.db = new Database();
        this.query ="";
    }
   

save = ()=>{
    this.query = "INSERT INTO services (name, document1, document2, document3, document4)";
    this.query +="VALUES('" + this.name +"','" + this.document1 +"','" + this.document2 +"','" + this.document3 +"','" + this.document4 +"')";
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });

}


list = ()=>{
    this.query = "SELECT * FROM services ORDER BY name";
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Admin;