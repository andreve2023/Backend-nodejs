const store = require('./store')
function addMessage(userName, message) {
    return new Promise((resolve, reject) => {
        if (!userName || !message){
            console.error('No ahi usuario o msj')
            return reject("Los  datos son incorrectos");
            return false
        }
        const fullMessage = {
            user: userName,
            message: message,
            date: new Date()
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}
function updateMessages(id, messages) {
    return new Promise(async (resolve, reject) => {
        if (!id || !messages) {
            reject("data invalida")
        }
        const result  = await store.update(id, messages)
        resolve(result)
    })
}
function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('id invalido')
            return false
        }
        store.remove(id).then(() => {
            resolve()
        }).catch(e => {
            reject(e)
        })
    })
}

module.exports = {addMessage, getMessages, updateMessages,deleteMessage}