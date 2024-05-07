const Travel = require('../models/travel');

const voyageController = {
    index: async (req, res) => {
        const voyages = await Travel.findAll({
            order: [
                ["destination", "ASC"],
              ],
        })
        res.render('voyages', {
            voyages
        });
    },

    showOne: async (req, res) => {
        const id = req.params.id
        const voyage = await Travel.findByPk(id, {
            // include: [
            //     { association: 'activities' },
            // ],
        });
        res.render('voyage', {
            voyage
        })
    }
}

module.exports = voyageController ;


