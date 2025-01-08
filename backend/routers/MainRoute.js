const express = require("express");
const userRouter = require("./UserRoute");
const orderRouter = require("./OrderRoute")

const mainRouter = express.Router();

mainRouter.use(userRouter);
// mainRouter.use(orderRouter);


mainRouter.get("/",(req,res)=>{
    res.send("welcome main route!");
});
module.exports = mainRouter;