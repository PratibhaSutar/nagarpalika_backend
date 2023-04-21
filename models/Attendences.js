var Database = require("./Database");
class Attendences{
    constructor(){
        this.id = 0;
        this.category_id = 0;
        this.employee_details_id = 0;
        this.name = "";
        this.mobile_no ="";
        this.date = "";
        this.present = "";
        this.absent = "";
        this.attendence = "";

        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = 
    "INSERT INTO attendences(date, category_id, employee_details_id, name,mobile_no, present, absent, attendence)";
    this.query +=
    "VALUES('" + 
    this.date +
    "', '" + 
    this.category_id +
    "', '" + 
    this.employee_details_id +
    "', '" + 
    this.name +
    "', '" + 
    this.mobile_no +
    "', '" + 
    this.present +
    "', '" + 
    this.absent +
    "', '" + 
    this.attendence +
    "')";
    return new Promise((resolve, reject)=>{
           this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });

}
//update record
update = ()=>{
    this.query = "UPDATE attendences SET date ='" + this.date +  "', attendence ='" + this.attendence +  "' WHERE id =" + this.id;

    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });

}


//get list of records
list = ()=>{
    // this.query = "SELECT * FROM attendences ORDER BY id";
    this.query = "SELECT * FROM attendences ORDER BY id";

    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}

// lists = ()=>{
//     // this.query = "SELECT * FROM attendences ORDER BY id";
//     this.query = "SELECT * FROM attendences ORDER BY category_id";

//     return new Promise((resolve, reject)=>{

//         this.db.query(this.query,(err, result)=>{
//             if(err)
//             reject(err);
//             resolve(result);
//         });

//     });
// }

// get = ()=>{
    
//     this.query = "SELECT * FROM attendences WHERE employee_details_id = " + this.employee_details_id + " ORDER BY id";

//     return new Promise((resolve, reject)=>{

//         this.db.query(this.query,(err, result)=>{
//             if(err)
//             reject(err);
//             resolve(result);
//         });

//     });
// }
//get single record
get = ()=>{
    this.query = "SELECT * FROM attendences WHERE id =" + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
//delete record
delete = ()=>{
    this.query = "DELETE FROM attendences WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Attendences;