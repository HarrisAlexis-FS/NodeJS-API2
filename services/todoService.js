const axios = require("axios");
require("dotenv").config();

const todoService = async () => { //async always goes into method
    console.log("Real Todos");
    return await axios.get(`${process.env.todosURL}`)
};

//const todoServiceById (id: any) => Promise<any>

const todoServiceById = async (id) => {
    console.log("Real todos by Id");
    return await axios.get(`${process.env.todosURL}${id}`)
};

module.exports = { todoService, todoServiceById}