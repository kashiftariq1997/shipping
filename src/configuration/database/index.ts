import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        const databaseUrl = process.env.DATABASE_URL;
        const databaseName = process.env.DATABASE_NAME;

        const connection = await mongoose.connect(`${databaseUrl}${databaseName}&retryWrites=true&w=majority`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });

        if (connection) {
            console.log("Database connection established");
        } else {
            console.log("Couldn't connect to the Database");
        }
    } catch (error) {
        console.log("Couldn't connect to the Database internal server error");
    }
};

export default dbConnection;
