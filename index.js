import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{const 
    anil={name:"anil",age:29,password:2003}
    res.send(anil)});
app.post("/user",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const password = req.body.password;
    console.log([name,age,password]);
    return res.status(200).send({status:200});
});
app.post("/admin",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const password = req.body.password;
    return res.status(200).send({status:200});
});
app.listen(8080,(req,res)=>(console.log("backend connected")))