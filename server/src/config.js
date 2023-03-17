import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 9000;
export const OPEN_API_KEY = process.env.OPEN_API_KEY;
export const PROJECT_ID = process.env.PROJECT_ID;
export const BOT_USER_NAME = process.env.BOT_USER_NAME;
export const BOT_USER_SECRET = process.env.BOT_USER_SECRET;
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
