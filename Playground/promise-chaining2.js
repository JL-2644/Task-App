require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f5f0746fc2e64289079bd85").then(() => {
//     return Task.countDocuments( { completed: false})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const del = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments( {completed: false});
    return count;
}

deleteTaskAndCount("5f5f0746fc2e64289079bd85").then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})