const compteurFull = require('../../public/js/style');

const checkRight = {

    checkCount: (req, res, next) => {
        if (compteurFull) {
        console.log('Le compte est bon')
        next()
        } else {
            res.render('AccesDenied')
        }

    },

}

module.exports = checkRight;