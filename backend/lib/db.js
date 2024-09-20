import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://chetany0007:FPU4R6WMQc19BXKh@cluster0.tz4kf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};
 