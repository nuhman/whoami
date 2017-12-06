const express = require('express');
const ip = require('request-ip');
const ua = require('useragent');
const app = express();

//app.set('view engine', 'ejs');
//app.use(express.static('public'));

app.get("/", (req, res) => {
    //res.sendFile(__dirname + '\\index.html');
     var data = {
        ip_address: ip.getClientIp(req),
        language: req.headers["accept-language"].split(",")[0],
        os: ua.parse(req.headers['user-agent']).os.family
    } 
     res.setHeader('content-type', 'application/json');
     res.json(data);
    //res.render("index.ejs", {data: data});
    //res.send(req.connection.remoteAddress);    
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on 3000...");
});

console.log('May Node be with you');


function urldecode(str) {
    return decodeURIComponent((str+'').replace(/\+/g, '%20'));
 }
