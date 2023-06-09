

testJsonData = [
  {
    "_id": {
      "$oid": "646ff6bec6799d0015ce35be"
    },
    "speed": 34.2,
    "rpm": 0,
    "state": 1,
    "displaysoc": 70,
    "bmssoc": 68.5,
    "range": 0,
    "trip": 52345,
    "lat": 35.990158,
    "lng": 129.5554046,
    "odo": 78077,
    "accum_rbchg_amount": 0,
    "accum_dischg_amount": 17769,
    "accum_chg_amount": 18213,
    "dischg_amount": 8.7,
    "chg_amount": 0,
    "c": 1.1,
    "v": 743.4,
    "maxt": 22,
    "mint": 21,
    "maxtmn": 1,
    "mintmn": 8,
    "tdevi": 1,
    "maxcv": 3.84,
    "mincv": 3.84,
    "maxcvcn": 37,
    "mincvcn": 92,
    "vdevi": 0,
    "soh": 100,
    "auxbattvolt": 13,
    "residual_value": "0",
    "transactionid": "2305260754000",
    "datacount": 66,
    "serialnumber": "9000316",
    "createdAt": {
      "$date": "2023-05-26T00:01:02.884Z"
    },
    "updatedAt": {
      "$date": "2023-05-26T00:01:02.884Z"
    },
    "baseymd": "2023-05-26"
  },
  {
    "_id": {
      "$oid": "646ff6fa7671b40012adb2bd"
    },
    "speed": 0.35,
    "rpm": 0,
    "state": 1,
    "displaysoc": 70,
    "bmssoc": 68.5,
    "range": 0,
    "trip": 52347,
    "lat": 35.9901733,
    "lng": 129.5554046,
    "odo": 78078,
    "accum_rbchg_amount": 0,
    "accum_dischg_amount": 17770,
    "accum_chg_amount": 18213,
    "dischg_amount": 8.7,
    "chg_amount": 0,
    "c": 0.4,
    "v": 743.5,
    "maxt": 22,
    "mint": 21,
    "maxtmn": 1,
    "mintmn": 8,
    "tdevi": 1,
    "maxcv": 3.84,
    "mincv": 3.84,
    "maxcvcn": 37,
    "mincvcn": 92,
    "vdevi": 0,
    "soh": 100,
    "auxbattvolt": 13,
    "residual_value": "0",
    "transactionid": "2305260754000",
    "datacount": 67,
    "serialnumber": "9000316",
    "createdAt": {
      "$date": "2023-05-26T00:02:02.905Z"
    },
    "updatedAt": {
      "$date": "2023-05-26T00:02:02.905Z"
    },
    "baseymd": "2023-05-26"
  }
]




testJsonData2 = {
  serialnumber: "9000316",
  accum_dischg_amount: [
    17769,
    17769
  ],
  time: [
    "2023-05-26T00:01:02.884Z",
    "2023-05-26T00:02:02.884Z"
  ]
}



module.exports = { testJsonData, testJsonData2 };