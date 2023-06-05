const {Router} = require('express')
const controller = require('./controller');
const response = require("../../network/response");

const router = Router()

router.get('/', (req, res) => {
    controller.getUsers().then((users) => {
        response.success(req, res, users, 200)
    }).catch(e => {
        response.error(req, res, 'error', 500, e)
    })
})
router.post('/', (req, res) => {
    controller.addUser(req.body.user).then((user) => {
        response.success(req, res, user, 201)
    }).catch(e => {
        response.error(req, res, "informacion invalida", 400, e)
    })
})

// router.patch('/:id', (req, res) => {
//     const {id} = req.params
//     controller.updateMessages(id, req.body.message).then((data) => {
//         response.success(req, res, data, 200)
//     }).catch(e => {
//         response.error(req, res, 'error interno', 500, e)
//     })
// })
// router.delete('/:id', (req, res) => {
//     const {id} = req.params
//     controller.deleteMessage(id).then(() => {
//         response.success(req, res, `Usuario ${id} eliminado `, 200)
//     }).catch( e => {
//         response.error(req, res, "error interno", 500, e)
//     })
// })

module.exports = router;