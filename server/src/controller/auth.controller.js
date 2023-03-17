import axios from "axios";
import {
  BOT_USER_NAME,
  BOT_USER_SECRET,
  PROJECT_ID,
  PRIVATE_KEY,
} from "../config.js";

export const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const chatEngineResponse = await axios.get(
      `https://api.chatengine.io/users/me `,
      {
        headers: {
          "Project-ID": PROJECT_ID,
          "User-Name": username,
          "User-Secret": password,
        },
      }
    );

    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postSignup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const chatEngineResponse = await axios.post(
      `https://api.chatengine.io/users/ `,
      { username, secret: password },
      {
        headers: { "Private-key": PRIVATE_KEY },
      }
    );
    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
