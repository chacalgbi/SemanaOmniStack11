const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;
        const ong = await connection('ongs').where('id', id).select('nome').first();
        if(!ong){
            return response.status(400).json({erro: 'Não existe uma ONG com esse ID'});
        }
        return response.json(ong);
    }
}