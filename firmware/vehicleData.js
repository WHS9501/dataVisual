//전체차량 serialNumber
const vehicleList = [1, 2, 3, 4, 5];
//승용 serialNumber
const carList = [1, 2, 3];
//버스 serialNumber
const busList = [...new Set(vehicleList)].filter(item => !carList.includes(item));


module.exports = { vehicleList, carList, busList }