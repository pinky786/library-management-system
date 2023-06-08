const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "",
        database: "Librarydata",
    }
);

app.get('/showquantity', (req,res) => {
    con.query('SELECT SUM(quantity) FROM book_quantity', (err,result) => {
        if(err) throw new Error(err);
        console.log(result)
        res.end();
    })
})

app.listen(3001, () => {
    console.log("running backend server")
})