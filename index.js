const express = require("express");
const app = express();

//port find out
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")

//mount
app.use("/api/v1", blog);

//database fetch
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT,() => {
    console.log(`App is running at ${PORT}`);
});

//default route
app.get("/", (req,res) => {
    res.send(`<h1>This is homepage2</h1>`)
})