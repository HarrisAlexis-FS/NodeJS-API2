const express = require("express"); //give you the http methods post, get, delete, etc and allows you to make a router
const todosRouter = require("../router/todosRouter");

const app = express();
//initial GET calling http://localhost:3000
app.get("/", (req,res,next) => {
    res.status(200).send("Service is up")
});

//router middleware
app.use("/todos", todosRouter)

//adding middleware to handle errors and bad url paths
app.use((req,res,next) => {
    const error = new Error("NOT Found");
    error.status = 404;
    next(error)
});

app.use((error,req,res,next) => {
 res.status(error.status || 500).json({
    error: {
        message: error.message,
        status: error.status,
        method: req.method
    }
 })
})

module.exports = app;

