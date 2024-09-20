import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: 'dastgtlz2',
	api_key: 791349673597152,
	api_secret: 'DX6l6OvSxmqQFZ3agsLQzbrbylw',
});

export default cloudinary;
