import { usePostaiAssistMutation } from "@/state/api";
import { useState, useEffect } from "react";
import { MessageFormUI } from "..";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}

const AiAssist = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [appendText, setAppendText] = useState("");
  const [trigger, resultAssist] = usePostaiAssistMutation();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);

    const attachments = attachment
      ? [{ blob: attachment, file: attachment.name }]
      : [];

    const form = {
      attachments,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    trigger(form);
    setMessage("");
    setAttachment("");
  };

  const debouncedValue = useDebounce(message, 1000);

  useEffect(() => {
    if (debouncedValue) {
      const form = { text: message };
      trigger(form);
    }
  }, [debouncedValue]); // eslint-disable-line

  const handleKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      setMessage(`${message} ${appendText}`);
    }

    setAppendText("");

    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (resultAssist.data?.text) {
      setAppendText(resultAssist.data?.text);
    }
  }, [resultAssist]);

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      appendText={appendText}
      handleKeyDown={handleKeyDown}
    />
  );
};

export default AiAssist;
