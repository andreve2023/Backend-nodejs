const {Router} = require('express')
const controller = require('./controller');
const response = require("../../network/response");

const router = Router()

router.get('/:userId', (req, res) => {
    controller.listsChats(req.params.userId).then((users) => {
        response.success(req, res, users, 200)
    }).catch(e => {
        response.error(req, res, 'error', 500, e)
    })
})
router.post('/', (req, res) => {
    controller.addChat(req.body.users).then((users) => {
        response.success(req, res, users, 201)
    }).catch(e => {
        response.error(req, res, "informacion invalida", 400, e)
    })
})



module.exports = router;