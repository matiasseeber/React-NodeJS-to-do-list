import mongo from "mongodb";

const connectionUrl = "mongodb+srv://matiasseeber:matiasseeber@matiasseebertestcluster.i7jxecz.mongodb.net/?retryWrites=true&w=majority";

const client = new mongo.MongoClient(connectionUrl);

//user matiasseeber
//password matiasseeber

async function connection(callback){
    try{
        await client.connect();
        return await callback(client.db("toDoListDB"));
    }
    catch (err){
        throw err;
    }
    finally
    {
        client.close();
    }
}

export async function addTask(newTask){
    return await connection(async function(database){
        return await database.collection("tasks").insertOne(newTask);
    })
}

export async function getAllTasks(){
    return await connection(async function(database){
        return await database.collection("tasks").find().toArray();
    })
}

export async function updateTask(id, task){
    return await connection(async function(database){
        return await database.collection("tasks").replaceOne({_id: mongo.ObjectId(id)}, task);
    })
}
