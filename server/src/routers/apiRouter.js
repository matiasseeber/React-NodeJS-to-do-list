import express from "express";
import {addTask, getAllTasks, updateTask, deleteTask} from "../controllers/controllerApi.js";

const router = express.Router();

router.route("/")
    .get(getAllTasks)
    .post(addTask)

router.route("/:id")
    .patch(updateTask)
    .delete(deleteTask)

export default router;