import app from "./app.js";
import { PORT } from "./config.js";

// OPEN AI //
import "./openaiConfig.js";

// SERVER SETUP //
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
