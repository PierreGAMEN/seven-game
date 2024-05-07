const { Travel, Wishlist } = require('../models');

const wishlistController = {
    index: async (req, res) => {
        try {
            const wishes = await Wishlist.findAll({
                include: ["travels"]})
                console.log(wishes)
            res.render('wishlist', {wishes});
        } catch (error) {
            console.error('Error fetching wishlist entries:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    create: async (req, res) => {
        const id = req.params.id
        const foundtravelInWish = await Wishlist.findOne({where: {travel_id: id}})
        if(!foundtravelInWish) {
        const travelToWishlist = await Wishlist.create({travel_id: id})
        res.redirect(`/voyages/${id}`); 
    } else {
        res.redirect('/wishlist');
    }
    },

    delete: async (req, res) => {
        const id = req.params.id
        const foundtravelInWish = await Wishlist.findOne({where: {travel_id: id}})
        if(foundtravelInWish) {
            await Wishlist.destroy({ where: { travel_id: id } });
        res.redirect('/wishlist'); 
    } else {
        res.redirect('/wishlist');
    }
    },


}
 
module.exports = wishlistController ;