const Aggbattdata1M = require("../models/Aggbattdata1M");
const Service = require("../service/aggbattdata1ms");

class Aggbattdata1ms {

    service = new Service();

    //상세조회
    getChartData = async (req, res, next) => {

        const { category, serialnumber, startDate, endDate, state, limit } = req.body;

        const controllreResult = await this.service.dataChanger(category, serialnumber, startDate, endDate, state, limit)

        console.log('controllreResult', controllreResult)

        if (isEmptyObj(controllreResult)) {
            return res
                .status(201)
                .json({ success: false, errorMessage: "없는 데이터입니다." });
        }

        res.json({ success: true, result: controllreResult });
    };
}

function isEmptyObj(obj) {
    if (obj.constructor === Object
        && Object.keys(obj).length === 0) {
        return true;
    }

    return false;
}




module.exports = Aggbattdata1ms;