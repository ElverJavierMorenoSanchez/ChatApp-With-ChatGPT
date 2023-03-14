import app from "./app.js";
import { PORT } from "./config.js";

// SERVER SETUP //
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
