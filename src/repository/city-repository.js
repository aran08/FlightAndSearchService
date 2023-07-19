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
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity( cityId, data) {
        try {
            //the below approach also work but will not return updated object
            // const city = await City.update( data, {
            //     where: {
            //         Id :cityId
            //     },

            //if we using Pg then returning:true can be used else not
            //     returning:true,
            //     plain:true
            // });
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }

    async getCity( cityId ) {
        try {
            const city = await City.findByPK( cityId );
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }
}

module.exports = CityRepository;