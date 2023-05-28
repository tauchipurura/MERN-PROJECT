const mongoose = require('mongoose')


const connectDB = mongoose.connect(process.env.DATABASE_URI)
.then(()=> {
    // console.log('connected to MongoDB')
    app.listen(3500, ()=>{
        console.log(`Node API app is running on port 8000`)
    })
}).catch((error)=>{
    console.log(error)
})

// const connectDB = async()=>{
//     try{
//         await mongoose.connect(process.env.DATABSE_URI, {
//             useUnifiedTopology: true,
//             useNewUrlParser :true
//         })
//     }catch (err){
//         console.error(err)
//     }
// }

module.exports = connectDB