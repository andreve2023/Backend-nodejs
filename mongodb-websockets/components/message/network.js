const {Router} = require('express')
const controller = require('./controller');
const response = require("../../network/response");

const router = Router()

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages).then((listMsg) => {
        response.success(req, res, listMsg, 200)
    }).catch(e => {
        response.error(req, res, 'error', 500, e)
    })
})
router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message).then((fullMessage) => {
        response.success(req, res, fullMessage, 201)
    }).catch(e => {
        response.error(req, res, "informacion invalida", 400, 'error en el controller')
    })
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    controller.updateMessages(id, req.body.message).then((data) => {
        response.success(req, res, data, 200)
    }).catch(e => {
        response.error(req, res, 'error interno', 500, e)
    })
})
router.delete('/:id', (req, res) => {
    const {id} = req.params
    controller.deleteMessage(id).then(() => {
        response.success(req, res, `Usuario ${id} eliminado `, 200)
    }).catch( e => {
        response.error(req, res, "error interno", 500, e)
    })
})

module.exports = router;