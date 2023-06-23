import mongoose from "mongoose";

const dbConnection=()=>{ 
    mongoose
    .connect( process.env.DB_URI, {
        dbName: "JOB_PORTAL",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));

}
export default dbConnection