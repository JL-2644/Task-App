// start server: "C:\Users\Jia Qi\mongodb\bin\mongod.exe" --dbpath="C:\Users\Jia Qi\mongodb-data"
// npm run dev
// send request in postman

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})