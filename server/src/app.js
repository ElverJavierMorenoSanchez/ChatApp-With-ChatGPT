import express from "express";
import bodyParcer from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import openaiRoutes from "./routes/openai.routes.js";
import authRoutes from "./routes/auth.routes.js";

// CONFIG SERVER //
const app = express();

// CONFIGURATIONS MIDDLEWARES //
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParcer.json({ limit: "30mb", extended: true }));
app.use(bodyParcer.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// CONFIGURATIONS ROUTES //
app.use("/openai", openaiRoutes);
app.use("/auth", authRoutes);

export default app;
