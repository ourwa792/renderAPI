const express = require('express')

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

sequelize.sync()
.then(() => {
    app.listen(2000,()=>{
        console.log('server running')
    })
}).catch((err) => {
    console.log(err)
});
