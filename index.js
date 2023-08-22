let express=require('express');

app= express();

app.get('/', function (req, res){
    res.send('Hello Home Page');
});

app.post('/about', function (req, res){
    res.send('Hello About page');
});

app.put('/contact', function (req, res){
    res.send('Hello Contact Page');
});

app.delete('/test', function (req, res){
    res.send('Hello Test Page');
});


app.listen(5050, function (){
    console.log("server run success")
});