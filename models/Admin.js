var Database = require("./Database");
class Admin{
    constructor(){
        this.id = 0;
        this.email="";
        this.password="";
        this.db = new Database();
        this.query ="";
    }
   

save = ()=>{
    this.query = "INSERT INTO login (email, password)";
    this.query +="VALUES('" + this.email +"','" + this.password +"')";
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });

}


list = ()=>{
    this.query = "SELECT * FROM login ORDER BY id";
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