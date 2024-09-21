import mongoose from "mongoose"
let cached = global.mongoose
const URL = process.env.MONGODB_URL
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands : false,
            maxPoolSize: 2,
            serverSelectionTimeoutMS: 800,
        }
        cached.promise = mongoose.connect(URL || "", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).thee((mongoose) => {
            return mongoose
        })
        .catch(err => console.log(err))
    }
    try{
        cached.conn = await cached.promise          
    }catch(err) {
        console.log(err)
    }
    return cached.conn
}
