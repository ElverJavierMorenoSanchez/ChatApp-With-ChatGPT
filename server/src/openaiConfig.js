import { OPEN_API_KEY } from "./config.js";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: OPEN_API_KEY,
});

export const openai = new OpenAIApi(configuration);
