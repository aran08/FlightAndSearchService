const { City } = require ('../models/index');

class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({ 
                name
             });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    
    async deleteCity( cityId ) {
        try {
            await City.destroy({
                where: {
                    id : cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity( cityId, name) {
        try {
            const city = await City.update( data, {
                where: {
                    Id :cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }

    async getCity( cityId ) {
        try {
            const city = await City.findByPK( cityId );
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }
}

module.exports = CityRepository;