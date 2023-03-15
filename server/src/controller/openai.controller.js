import axios from "axios";
import { BOT_USER_NAME, BOT_USER_SECRET, PROJECT_ID } from "../config.js";
import { openai } from "../openaiConfig.js";

export const sendMessage = async (req, res) => {
  try {
    const { text, activeChatId } = req.body;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0.5,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: response.data.choices[0].text },
      {
        headers: {
          "Project-ID": PROJECT_ID,
          "User-Name": BOT_USER_NAME,
          "User-Secret": BOT_USER_SECRET,
        },
      }
    );

    res.status(200).json({ text: response.data.choices[0].text });
  } catch (error) {
    console.log(error);
    res.status(504).json({ message: error.message });
  }
};
