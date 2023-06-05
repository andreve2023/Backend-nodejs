const Model = require('./model');
function addChat(chat) {
    const MyChat = new Model(chat)
    return MyChat.save()
}

async function listChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (userId){
            filter = {
                users: userId
            }
        }
        Model.find(filter)
            .populate('users')
            .exec().then((res) => {
                resolve(res)
        })
    })
}


module.exports = {
    add: addChat,
    list: listChats
}