const { Aggbattdata1M } = require("../models/Aggbattdata1M");


class Mongo {

    getaggbattdata1ms = async (serialnumber, startDate, endDate, state, limit) => {
        console.log('getaggbattdata1ms===>', "start")

        const query = {
            serialnumber: serialnumber,
            createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
            state: state
        };

        const result = await Aggbattdata1M.find(query).limit(limit);

        console.log('query', query)
        console.log('result', result)

        return result;
    }

}



module.exports = Mongo