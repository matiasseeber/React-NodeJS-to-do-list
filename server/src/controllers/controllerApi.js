import * as data from "../model/data.js";

export function addTask(req, res) {
    req.body.active = true;
    data.addTask(req.body)
        .then((response) => {
            console.log(response);
            if (response.acknowledged)
                res.status(200).json("Registro insertado exitosamente");
            else
                res.status(500).json("No se pudo añadir el registro");
        })
        .catch((err) => {
            res.status(500).json({ "error": err });
        })
}

export function getAllTasks(req, res) {
    data.getAllTasks()
        .then((response) => {
            console.log(response);
            res.status(200).json(response);
        })
        .catch((err) => res.status(500).json(err))
}

export function updateTask(req, res){
    data.updateTask(req.params.id ,req.body)
        .then((response) => {
            console.log(response);
            if (response.acknowledged)
                res.status(200).json("Registro modificado exitosamente");
            else
                res.status(500).json("No se pudo modificar el registro");
        })
        .catch((err) => res.status(500).json(err))
}

export function deleteTask(req, res){
    data.deleteTask(req.params.id)
        .then((response) => {
            console.log(response);
            if (response.acknowledged)
                res.status(200).json("Registro eliminado exitosamente");
            else
                res.status(500).json("No se pudo eliminado el registro");
        })
        .catch((err) => res.status(500).json(err))
}