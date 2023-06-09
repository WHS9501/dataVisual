
// const Mongo = require("../data/mongo");
const { testJsonData } = require("../test.js")
const Mongo = require("../data/mongo.js")

class Service {
    mongo = new Mongo();

    dataProcessor = new DataProcessor();

    //차트 필요 데이터 제공
    dataChanger = async (category, serialnumber, startDate, endDate, state, limit) => {

        //startDate, endDate 가공 (분단위 데이터로 가굥해줘야함)
        console.log('startDate', startDate)
        console.log('endDate', endDate)

        const dbData = await this.mongo.getaggbattdata1ms(serialnumber, startDate, endDate, state, limit);


        const result = this.dataProcessor.processTestData(dbData, category);

        console.log('result', result)

        return result;
    }

}

//데이터 가공
class DataProcessor {
    constructor() {
        this.data = [];
        this.obj = {};
    }

    processTestData(testJsonData, propName) {
        this.data = testJsonData;
        this.calculateData(propName);
        this.calculateData("createdAt");
        return this.obj;
    }

    calculateData(key) {
        const data = this.data.map(item => item[key]);
        if (key == "createdAt") {
            this.obj[key] = data;
        } else{
            this.obj[key] = data;
        }
    }

}


module.exports = Service;

