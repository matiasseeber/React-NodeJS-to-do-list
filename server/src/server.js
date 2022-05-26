import express from "express";
import router from "./routers/apiRouter.js";

const app = express();

app.use(express.json());
app.use("/Api", router);

app.listen(8080, () => { 
    console.log("Server Online on port 8080");
})