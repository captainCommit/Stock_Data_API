const express=require('express');
const app=express();
const request=require('request-promise');


//Middlewares
app.use(express.json());
//Routes
app.post('/',(req,res)=>{
    try{
    //const url='https://www.nseindia.com/api/quote-equity?symbol=ONGC&section=trade_info';
    const options = {
        uri:'https://www.nseindia.com/api/quote-equity?symbol=ONGC&section=trade_info',         
        method: 'GET',
        headers: {
              //'referer': 'https://www.nseindia.com/api/quote-equity?symbol=ONGC',
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'
        }
        
      }
      request(options)
    .then(function (response) {
        console.log('success');
    })
    .catch(function (err) {
        console.log(err);
    });
 

     res.send("hi");
    }
    catch(err){
        console.log(err);
    }

});
app.listen(3000,()=>{
    console.log("server started on 3000");
});