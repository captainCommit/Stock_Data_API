const express=require('express');
const app=express();
const axios = require('axios').default;


//Middlewares
app.use(express.json());
//Routes

app.get('/', (req,res) => {
    const stockName = req.query.s;
    const url = `https://www.nseindia.com/api/quote-equity?symbol=${stockName}&section=trade_info`
    console.log(url);
    axios.get(url).then((resp)=>{
        //console.log(resp.data)
        const data = JSON.parse(JSON.stringify(resp.data))
        if(data.msg === "no data found"){
            console.log("No stock found")
            res.send({"error":"No stock found"})
        }
        else{
        //console.log(data)
            res.send(data)
            console.log("Stock found")
        }
    }).catch((err)=>{
        console.log(err)
        res.send({"error" : "Unexpected error occured","errorMsg" : err})
    })
});
app.listen(3000,()=>{
    console.log("Server started on 3000");
});