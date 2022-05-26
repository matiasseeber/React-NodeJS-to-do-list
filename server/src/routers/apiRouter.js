import express from "express";
import {addTask, getAllTasks, updateTask} from "../controllers/controllerApi.js";

const router = express.Router();

router.route("/")
    .get(getAllTasks)
    .post(addTask)

router.route("/:id")
    .put(updateTask)

export default router;