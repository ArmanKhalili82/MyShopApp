import mongoose from "mongoose";

const connectionDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb ${conn.connection.host}`)

    }   catch (error) {
          console.log(`Mongodb failed to connect ${error}`)
    }
}

export default connectionDB;