let CATEGORY;
let SERIAL_NUMBER;
let START_DATE;
let END_DATE;
let LIMIT;
let STATE;
let DATA;

////검색 히스토리 창 데이터초기값 설정
DATA = [{
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

//검색 히스토리 창 데이터 반영
const searchHistoryData = JSON.parse(localStorage.getItem('searchHistory'))
if (searchHistoryData != null) {
    DATA.unshift(...searchHistoryData);
}

//검색 히스토리 창 생성
const grid = new gridjs.Grid({
    columns: ["serialNumber", "startDate", "endDate", "limit", "state"],
    fixedHeader: true,
    pagination: true,
    resizable: true,
    width: 1000,
    height: 200,
    data: DATA,
}).render(document.getElementById("wrapper"));


//검색 히스토리 창 값 검색조건에 반영
grid.on('rowClick', (...args) => {

    //검색 히스토리 테이블 값 클릭시의 값 가져오기
    const clickedRow = args[1];
    SERIAL_NUMBER = clickedRow._cells[0].data;
    START_DATE = clickedRow._cells[1].data;
    END_DATE = clickedRow._cells[2].data;
    LIMIT = clickedRow._cells[3].data;
    STATE = clickedRow._cells[4].data;

    //공통조건에 클릭시 가져온 값 반영
    document.getElementById("serialNumber").value = SERIAL_NUMBER;
    document.getElementById("startDate").value = START_DATE.slice(0, 16);
    document.getElementById("endDate").value = END_DATE.slice(0, 16);
    document.getElementById("limit").value = LIMIT;
    document.getElementById("state").value = STATE;
});




function Chart1_Search(event) {
    event.preventDefault(); // 입력값 유지

    const categoryInput = document.getElementById("Chart1_category");


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

    if (
        categoryInput.value != "" && serialNumberInput.value != ""
        && startDateInput.value != "" && endDateInput.value != ""
        && limitInput.value != "" && stateInput.value != "") {

            console.log("categoryInput",categoryInput);
        const searchData = createSearchObject(
            SERIAL_NUMBER,
            START_DATE,
            END_DATE,
            LIMIT,
            STATE
        );

        saveSearchObject(searchData);

        getChartData("chart1", CATEGORY, SERIAL_NUMBER, START_DATE, END_DATE, STATE, LIMIT);
    } else {
        alert("비어있는 값이 있습니다 확인 바랍니다.")
    }
}

function Chart2_Search(event) {
    event.preventDefault(); // 입력값 유지

    const categoryInput = document.getElementById("Chart2_category");
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

    if (
        categoryInput.value != "" && serialNumberInput.value != ""
        && startDateInput.value != "" && endDateInput.value != ""
        && limitInput.value != "" && stateInput.value != "") {


        const searchData = createSearchObject(
            SERIAL_NUMBER,
            START_DATE,
            END_DATE,
            LIMIT,
            STATE
        );

        saveSearchObject(searchData);

        getChartData("chart2", CATEGORY, SERIAL_NUMBER, START_DATE, END_DATE, STATE, LIMIT);
    } else {
        alert("비어있는 값이 있습니다 확인 바랍니다.")
    }


}

function Chart3_Search(event) {
    event.preventDefault(); // 입력값 유지

    const categoryInput = document.getElementById("Chart3_category");
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


    if (
        categoryInput.value != "" && serialNumberInput.value != ""
        && startDateInput.value != "" && endDateInput.value != ""
        && limitInput.value != "" && stateInput.value != "") {


        const searchData = createSearchObject(
            SERIAL_NUMBER,
            START_DATE,
            END_DATE,
            LIMIT,
            STATE
        );

        saveSearchObject(searchData);

        getChartData("chart3", CATEGORY, SERIAL_NUMBER, START_DATE, END_DATE, STATE, LIMIT);
    } else {
        alert("비어있는 값이 있습니다 확인 바랍니다.")
    }

}

function Chart4_Search(event) {
    event.preventDefault(); // 입력값 유지

    const categoryInput = document.getElementById("Chart4_category");//변경값 반영("Chart4_category")
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

    if (
        categoryInput.value != "" && serialNumberInput.value != ""
        && startDateInput.value != "" && endDateInput.value != ""
        && limitInput.value != "" && stateInput.value != "") {


        const searchData = createSearchObject(
            SERIAL_NUMBER,
            START_DATE,
            END_DATE,
            LIMIT,
            STATE
        );

        saveSearchObject(searchData);

        //변경값 반영("chart4")
        getChartData("chart4", CATEGORY, SERIAL_NUMBER, START_DATE, END_DATE, STATE, LIMIT);

    } else {
        alert("비어있는 값이 있습니다 확인 바랍니다.")
    }

}


//검색기록 값 객체생성
function createSearchObject(
    serialNumber,
    startDate,
    endDate,
    limit,
    state
) {
    let obj = {};
    obj.serialNumber = serialNumber;
    obj.startDate = startDate;
    obj.endDate = endDate;
    obj.limit = limit;
    obj.state = state;

    return obj;
}

//검색기록 객체 배열 저장
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

//검색기록 객체 배열 삭제
function deleteSearchHistory() {
    localStorage.clear()
}


//차트생성 데이터 가져오기
function getChartData(chartKind, CATEGORY, SERIAL_NUMBER, START_DATE, END_DATE, STATE, LIMIT) {


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
                X_dir = dataResult.createdAt;
                Y_dir = dataResult[CATEGORY];
                ChartName = CATEGORY;
                createChart(chartKind);
            }
        })
        .catch((error) => {
            console.log("Error fetching data:", error);
        });
}

//차트생성
function createChart(ChartPage) {
    var chartArea = document.getElementById(ChartPage).getContext("2d");

    // create the chart
    new Chart(chartArea, {
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
            responsive: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}