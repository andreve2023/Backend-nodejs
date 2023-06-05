const Model = require('./model');
const {error} = require("../../network/response");
function addMessage(message) {
    const MyMessage = new Model(message)
    MyMessage.save()
}

async function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filterUser != null){
            filter = {user :filterUser}
        }
        Model.find(filter)
            .populate('user')
            .exec().then((res) => {
            resolve(res)
        })
    })
}
async function updateText(id, message) {
    const foundMessage = await Model.findOne({_id: id})
    foundMessage.message = message
    return foundMessage.save()
}

async function removeMessage(id) {
    return Model.deleteOne({_id: id})
}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateText,
    remove: removeMessage
}