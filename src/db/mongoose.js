// start server: "C:\Users\Jia Qi\mongodb\bin\mongod.exe" --dbpath="C:\Users\Jia Qi\mongodb-data"
// npm run dev
// send request in postman

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})