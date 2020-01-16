const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


//index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        // Buscar todos os Devs num raio de 10km
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000
                }
            }
        });

        //Filtrar por tecnologias

        return response.json({ devs });
    },

    
};