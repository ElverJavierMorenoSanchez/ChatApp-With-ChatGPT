import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 9000;
export const OPEN_API_KEY = process.env.OPEN_API_KEY;
