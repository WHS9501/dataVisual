const request = require('request');
const axios = require('axios');


//펌웨어 업데이트
function update(dataList, version) {
    for (let data of dataList) {
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://mgr.baddery.co.kr:9080/adm/sys/iot/mngFwUpdate',
            'headers': {
                'Content-Type': 'application/json',
                'Cookie': 'SESSION=ZjY4ZTYxYmQtNWM4NS00MzhmLWIwNGYtMDdjMmQwYWQ1ZjMy'
            },
            body: JSON.stringify({
                "sn": `${data}`,
                "fwSeq": `${version}`
            })
        };
        console.log('options: ', options);
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
    }
}

//펌웨어 업데이트 체크
async function checkUpdate(dataList) {
    for (let data of dataList) {
        try {
            const response = await axios.post('https://mgr.baddery.co.kr:9080/adm/sys/iot/mngChkVer', {
                "sn": `${data}`,
                "procResult": null,
                "resultCode": null
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': 'SESSION=ZjY4ZTYxYmQtNWM4NS00MzhmLWIwNGYtMDdjMmQwYWQ1ZjMy'
                }
            });
            console.log(`${data} :`, response.data);
        } catch (error) {
            console.log(`${data} :`, "error");
        }
    }
}


module.exports = { update, checkUpdate, test }