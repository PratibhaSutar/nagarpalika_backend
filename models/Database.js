var mysql = require("mysql");

class Database{
constructor(){
    this.con = mysql.createConnection({
        host:"localhost",
        user: "root",
        password:"",
        database: "mydb"
    });
}

query = (sql, args)=>{
    return new Promise((resolve, reject)=>{
        this.con.query(sql,args, (err, result)=>{
            if(err)
                 reject(err);
        
                 resolve(result);
        });
    })
   
}
}

module.exports = Database;