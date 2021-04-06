const express = require('express');
const app = express();
const PORT = 3000;

//db
mysqldb = require('./db').connection;

// Form data parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
  res.send("hello world We out here");
});

app.post("/add", (req,res)=>{
  const details = req.body;
  console.log("this is the req.body>>>>", req.body);

  mysqldb.query("INSERT INTO students SET ?", details, (error, results)=>{
    if(error) throw error;
    res.json(results);
  });
});

app.get('/data/:searchId', (req,res)=>{
  const {searchId} = req.params;
  mysqldb.query("SELECT * FROM students WHERE id = ?", [searchId], (error, results)=>{
    if(error) throw error;
    res.json(results);
  });
});

app.get('/data', (req,res)=>{
  mysqldb.query("SELECT * FROM students", (error, results)=>{
    if(error) throw error;
    res.json(results);
  });
});

app.listen(PORT, () =>{
  console.log(`server is running at http://localhost:${PORT}`);

});