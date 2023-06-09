var mongoose = require('mongoose');


var Aggbattdata1MSchema = mongoose.Schema(
    {
        vehiclenumber: { type: String },                         // 차량번호
        serialnumber: { type: String, require: true },            // 시리얼번호
        speed: { type: Number, default: 0 },                     // 차량속도
        rpm: { type: Number, default: 0 },                       // 모터RPM
        state: { type: Number, default: 0 },
        displaysoc: { type: Number, default: 0 },                // 화면SOC
        bmssoc: { type: Number, default: 0 },                    // BMSSOC
        range: { type: Number, default: 0 },
        trip: { type: Number, default: 0 },                      // 주행거리
        lat: { type: Number, default: 0 },                       // 위도
        lng: { type: Number, default: 0 },                       // 경도
        odo: { type: Number, default: 0 },             // 총주행거리
        accum_rbchg_amount: { type: Number, default: 0 },        // 누적회생제동충전량
        accum_dischg_amount: { type: Number, default: 0 },       // 누적방전량
        accum_chg_amount: { type: Number, default: 0 },          // 누적충전량
        dischg_amount: { type: Number, default: 0 },                // 방전량
        chg_amount: { type: Number, default: 0 },                // 충전량
        c: { type: Number, default: 0 },          // 누적충전량
        v: { type: Number, default: 0 },          // 누적충전량
        maxt: { type: Number, default: 0 },
        mint: { type: Number, default: 0 },
        maxtmn: { type: Number, default: 0 },
        mintmn: { type: Number, default: 0 },                
        tdevi: { type: Number, default: 0 },
        maxcv: { type: Number, default: 0 },
        mincv: { type: Number, default: 0 },
        maxcvcn: { type: Number, default: 0 },
        mincvcn: { type: Number, default: 0 },
        vdevi: { type: Number, default: 0 },
        soh:{type: Number, default: 0 },
        auxbattvolt: {type: Number, default: 0},
        residual_value: { type: String, default: '' },
        baseymd: { type: String },
        transactionID: {type: String},
        datacount: {type:Number},                
    }, {
    timestamps: true,               // mongodb 기준 timestamp 찍기
    versionKey: false,
    strict: false
}
);


var Aggbattdata1M = mongoose.model('Aggbattdata1M', Aggbattdata1MSchema);

module.exports = { Aggbattdata1M };