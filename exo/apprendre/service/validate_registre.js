const {check } = require('express-validator');
exports.registerValidation = [
    check('name', 'entrer votre name').not().isEmpty(),
    check('last_name', 'entrer votre last name').not().isEmpty(),
    check('numbersed', 'entrer votre numero').not().isLength({min: 6}),
]