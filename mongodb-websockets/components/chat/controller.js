const store = require('./store')
function addChat(users) {
    if (!users || !Array.isArray(users)){
        return Promise.reject('invalid list users')
    }
    const chat = {
        users: users
    }
    return store.add(chat)
}

function listsChats(userId) {
    return store.list(userId)
}


module.exports = {listsChats, addChat}