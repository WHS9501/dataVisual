// Require the Express module
const express = require("express");

// Create a new instance of an Express app
const app = express();

// Require our routes
const routes = require("./routes");

// Set the values for our port and hostname
const port = 3000;


// Require the connection to our database
// Call the connect function to establish a connection to our database
const mongoDBconnect = require("./models");
mongoDBconnect();

// Configure middleware to parse JSON
app.use(express.json());
app.use("/api", routes);

// 화면 엔진은 ejs로 설정
app.set("view engine", "ejs");
app.set('views', __dirname + '/public');

//렌더링할것들
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index3', );
})


app.get('/test', function (req, res) {
  res.sendFile(__dirname + '/test.html');
})


app.get('/mongo', async (req, res) => {
  res.status(201).json({ result: result });
})

// Start the app
app.listen(port, () => {
  console.log(`Server running http://localhost:${port}/`);
});
