const {Sequelize, DataTypes }= require('sequelize');

const sequelize=new Sequelize(
    'manish', //database name
    'root', //database user name
    'manish', //database password
    {
        host:'localhost',//database host
        dialect: 'mysql', //database
    })



 sequelize.authenticate().then(()=>{
        console.log('authenticate successful');
    }).catch((err)=>{
        console.log(err.message);
    })

const pencil = sequelize.define('pencil', {
 name: {
    type:DataTypes.STRING,
    allowNull:false,
 },
 mobile:{
    type:DataTypes.INTEGER,
    allowNull:false,
 },
})

sequelize.sync().then(()=>{
    console.log('syncs successful');
    
    
    
}).catch((err)=>{
    console.log(err.message);
})


//insert data into table
// pencil.create({
//     name:'mshnai',
//     mobile:1331265461

// }).then((res)=>{
// console.log(res)
// }).catch((err)=>{
// console.log("filed to ctrate a record"+err.message)
// })


//select all records

// pencil.findAll({
//     where:{
//         name:"manish"
//     }
// }
// ).then((res)=>{
//     console.log( res)
// }).catch((err)=>{
//     console.log('Failed to retrieve data : ',err.message)
// })

//delete  records

// pencil.destroy({
//     where:{
//         name:"mshnai"
//     }
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log("record not found",err.message)
// })