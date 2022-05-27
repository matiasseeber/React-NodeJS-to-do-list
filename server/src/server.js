import express from "express";
import router from "./routers/apiRouter.js";
import cors from "cors";

const app = express();

app.use(cors({origin: "*"}));
app.use(express.json());
app.use("/Api", router);

app.listen(8080, () => { 
    console.log("Server Online on port 8080");
})