const express = require('express')
const path = require('path')

const app = express()
const sequelize = require('./database/db').sequelize
const Lesson = require('./models/Lesson').Lesson

app.get('/', (req, res)=>{
    const lesson = Lesson.findAll({raw:true})
    .then((data)=>{
        console.log(data)
        res.json(data)
    })
})

app.get('/v1',(req, res)=>{
    res.sendFile(path.join(__dirname, '/v2.html'))
})

sequelize.sync()
.then(() => {
    app.listen(2000,()=>{
        console.log('server running')
    })
}).catch((err) => {
    console.log(err)
});
