const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_first_database"
})

connection.connect((err)=>{
  if(err){
    console.error("An error occurred : " + err);
    return;
  }

  console.log("Mysql db connected successfully");
});

module.exports = {connection};