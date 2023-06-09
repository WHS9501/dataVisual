

let CATEGORY;
let SERIAL_NUMBER;
let START_DATE;
let END_DATE;
let LIMIT;
let STATE;
let DATA;

//초기값 설정
DATA = [{
    category
        :
        "speed",
    endDate
        :
        "2023-06-06T14:54:59.000Z",
    limit
        :
        101,
    serialNumber
        :
        "9000076",
    startDate
        :
        "2023-06-05T14:54:00.000Z",
    state
        :
        "1",
}]


const searchHistoryData = JSON.parse(localStorage.getItem('searchHistory'))
if (searchHistoryData != null) {
    DATA.unshift(...searchHistoryData);
}


const grid = new gridjs.Grid({
    columns: ["category", "serialNumber", "startDate", "endDate", "limit", "state"],
    pagination: true,
    sort: true,
    resizable: true,
    width:1000,
    height:250,
    data: DATA,
}).render(document.getElementById("wrapper"));


//테이블 데이터들 조회창에 업데이트
grid.on('rowClick', (...args) => {
    const clickedRow = args[1];
    CATEGORY = clickedRow._cells[0].data;
    SERIAL_NUMBER = clickedRow._cells[1].data;
    START_DATE = clickedRow._cells[2].data;
    END_DATE = clickedRow._cells[3].data;
    LIMIT = clickedRow._cells[4].data;
    STATE = clickedRow._cells[5].data;

    document.getElementById("category").value = CATEGORY;
    document.getElementById("serialNumber").value = SERIAL_NUMBER;
    document.getElementById("startDate").value = START_DATE.slice(0, 16);
    document.getElementById("endDate").value = END_DATE.slice(0, 16);
    document.getElementById("limit").value = LIMIT;
    document.getElementById("state").value = STATE;
});




function doSearch(event) {
    event.preventDefault(); // 입력값 유지

    const categoryInput = document.getElementById("category");
    const serialNumberInput = document.getElementById("serialNumber");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const limitInput = document.getElementById("limit");
    const stateInput = document.getElementById("state");

    CATEGORY = categoryInput.value;
    SERIAL_NUMBER = serialNumberInput.value;
    START_DATE = startDateInput.value + ":00.000Z";
    END_DATE = endDateInput.value + ":59.000Z";
    LIMIT = parseInt(limitInput.value, 10);
    STATE = stateInput.value;

    console.log("CATEGORY", CATEGORY);
    console.log("SERIAL_NUMBER", SERIAL_NUMBER);
    console.log("START_DATE", START_DATE);
    console.log("END_DATE", END_DATE);
    console.log("LIMIT", LIMIT);
    console.log("CAR_STATE", STATE);

    // 검색할때 번호를 매기면서 저장
    const searchData = createSearchObject(
        CATEGORY,
        SERIAL_NUMBER,
        START_DATE,
        END_DATE,
        LIMIT,
        STATE
    );
    saveSearchObject(searchData);

    // const SERIAL_NUMBER = "9000076";
    // const CATEGORY = "bmssoc";
    // const STAR_TDATE = "2023-05-26T00:00:00.000Z";
    // const END_DATE = "2023-05-26T23:59:59.000Z";
    // const LMIT = 100;
    // const STATE = 1;

    fetch("http://localhost:3000/api/data/aggbattdata1ms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            category: CATEGORY,
            serialnumber: SERIAL_NUMBER,
            startDate: START_DATE,
            endDate: END_DATE,
            state: STATE,
            limit: LIMIT,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            let dataCheck = data.success;
            let dataResult = data.result;

            if (dataCheck === true) {
                //가로 축, 세로축
                X_dir = dataResult.createdAt;
                Y_dir = dataResult[CATEGORY];
                ChartName = CATEGORY;

                createChart();
            }
        })
        .catch((error) => {
            console.log("Error fetching data:", error);
        });

    function createChart() {
        var chartArea = document.getElementById("Chart_First").getContext("2d");

        // create the chart
        var Chart_First = new Chart(chartArea, {
            type: "line",
            data: {
                labels: X_dir,
                datasets: [
                    {
                        label: ChartName,
                        data: Y_dir,
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }
}

//검색기록 저장
//검색한값들에 대해 객체 형태로 만들기
function createSearchObject(
    category,
    serialNumber,
    startDate,
    endDate,
    limit,
    state
) {
    let obj = {};

    obj.category = category;
    obj.serialNumber = serialNumber;
    obj.startDate = startDate;
    obj.endDate = endDate;
    obj.limit = limit;
    obj.state = state;

    return obj;
}
//만들어진 객체 를 localStorage에 저장

function saveSearchObject(searchObj) {
    console.log("작동테스트");
    let searchHistory = localStorage.getItem("searchHistory");

    if (searchHistory) {
        searchHistory = JSON.parse(searchHistory);
    } else {
        searchHistory = [];
    }

    searchHistory.unshift(searchObj);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}



