const Model = require('./model');
function addUser(user) {
    const MyUser = new Model(user)
    return MyUser.save()
}

async function getUsers() {
    return Model.find();
}
// async function updateUser(id, message) {
//     const foundMessage = await Model.findOne({_id: id})
//     foundMessage.message = message
//     return foundMessage.save()
// }
//
// async function removeUser(id) {
//     return Model.deleteOne({_id: id})
// }

module.exports = {
    add: addUser,
    list: getUsers
}