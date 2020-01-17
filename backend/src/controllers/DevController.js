const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

//index, show, store, update, destroy

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            //Filtrar as conexoes que estão a no maximo 10km de deistancia e que o novo dev tenha ao menos uma das tecnologias
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            );

            sendMessage(sendSocketMessageTo, 'new-dev', dev);

            //console.log(name, avatar_url, bio, github_username);
        }
        
        return response.json(dev);
    },

    async update(request, response) {
        //Importantes atualizar: name, avatar_url, bio, location, techs
        const { github_username, name, avatar_url, bio, latitude, longitude, techs} = request.body;

        let dev = await Dev.findOne({
            github_username
        });

        if(dev) {
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.update({
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

            return response.json("Dados alterados com sucesso!");
        }

        return response.json("Os dados não foram alterados!");

    },

    async destroy(request, response) {
        //Deleta o Dev
        const { github_username } = request.query;
        
        const dev = await Dev.findOneAndDelete({
            github_username
        });

        if(dev) {
            return response.json("Deletado");
        }

        return response.json("Não Deletado");
    }
};