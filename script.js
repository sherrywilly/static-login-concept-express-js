const express = require("express")

const  app = express()
const Uname = "sherrywilson";
const Upass = "sherry@123";




app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static('views'));
app.post('/login',(req, res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    if(Uname === email && Upass === password){
        res.send("user successfully loged in")
    }else{
            res.send("invalid user")
    }

})

const PORT = process.env.PORT||3002;

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})