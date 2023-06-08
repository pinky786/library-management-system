// const express = require('express');
// const mysql = require('mysql')
// const cors = require('cors')

// const app = express();

// app.use(express.json());
// app.use(cors());

// // const con = mysql.createConnection(
// //     {
// //         user: "root",
// //         host: "localhost",
// //         password: "",
// //         database: "Librarydata",
// //     }
// // )
// try{
   
// const con = mysql.createConnection(
//     {
//         user: "root",
//         host: "localhost",
//         password: "",
//         database: "Librarydata",
//     }
 
// )
// console.log("connect")
// }
// catch(e){
//     console.log(e)
// }

// app.post('/login', (req,res) => {
//     console.log("hello")

//     const { username, password } = req.body;
//   // Handle the form fields (username and password) as needed
//   // Example: validate credentials, authenticate user, etc.
//   console.log('Received form fields:', { username, password });
   
//     // const email = req.body.email;
//     // const password = req.body.password;
   

//     // con.query("SELECT * FROM student WHERE email = ? AND password = ?", [email, password],
//     //     (err,result) => {
//     //         if(err){
//     //             req.setEncoding({err:err});
//     //         }
//     //         else{
//     //             if(result.length > 0){
//     //                 res.send(result);
//     //             }
//     //             else{
//     //                 res.send({message: "WRONG USERNAME OR PASSWORD"});
//     //             }
//     //         }
//     //     }
//     // )
//  }
// )

// app.listen(3001, () => {
//     console.log("running backend server")
// })



const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Perform authentication logic and connect to the database here
  // Replace the following example code with your actual authentication and database connection code

  // Example code to authenticate and respond with a success message
  if (email === "example@example.com" && password === "password") {
    res.json({ message: "Login Successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





