const store = require('./store')
function addUser(name) {
    if (!name){
        return Promise.reject('name invalida')
    }
    const user = {
        name
    }
    return store.add(user)
}

function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}
// function updateMessages(id, messages) {
//     return new Promise(async (resolve, reject) => {
//         if (!id || !messages) {
//             reject("data invalida")
//         }
//         const result  = await store.update(id, messages)
//         resolve(result)
//     })
// }
// function deleteMessage(id) {
//     return new Promise((resolve, reject) => {
//         if (!id) {
//             reject('id invalido')
//             return false
//         }
//         store.remove(id).then(() => {
//             resolve()
//         }).catch(e => {
//             reject(e)
//         })
//     })
// }

module.exports = {addUser, getUsers}