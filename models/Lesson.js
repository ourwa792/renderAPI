const { DataTypes } = require('sequelize');

const sequelize = require('../database/db').sequelize;

const Lesson = sequelize.define('Lesson',{
    title: {
        type: DataTypes.TEXT('long')
    }
}, {tableName: 'MathLsson',
    timestamps:false
})

/* Lesson.sync()
.then(()=>{
    console.log('lesson created..')
}) */




module.exports = {Lesson}
