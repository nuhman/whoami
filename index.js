const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
//app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    //res.sendFile(__dirname + '\\index.html');
    res.render("index.ejs", {ip: req.connection.remoteAddress});
    //res.send(req.connection.remoteAddress);
    //var language = window.navigator.userLanguage || window.navigator.language;    
    //res.send(language);
});


app.listen(3000, () => {
    console.log("Listening on 3000...");
});

console.log('May Node be with you');


function urldecode(str) {
    return decodeURIComponent((str+'').replace(/\+/g, '%20'));
 }