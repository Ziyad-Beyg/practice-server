import express from "express"

const app = express();

const PORT = process.env.PORT
// const PORT = '3000'


app.get('/', function(req,res){
    res.send(' EXPRESS 😎😎')
})

app.get('/tea', function(req, res){
    res.send("HAVE TEA ☕")
})

app.get('/food', function(req, res){
    res.send('HAVE FOOD 🍔')
})

app.get('/milk', function(req, res){
    res.send('HAVE MILK 🥛')
})

app.listen(PORT, ()=>{
    console.log(`========== ISI SERVER RUNNING ON PORT ${PORT} ==========`)
})