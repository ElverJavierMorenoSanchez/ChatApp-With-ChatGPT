import axios from "axios";
import {} from "../config.js";
import { openai } from "../openaiConfig.js";

export const sendMessage = async (req, res) => {
  try {
    const { text, activeChatId } = req.body;
    res.status(200).json({ text });
  } catch (error) {
    console.log(error);
    res.status(504).json({ message: error.message });
  }
};
