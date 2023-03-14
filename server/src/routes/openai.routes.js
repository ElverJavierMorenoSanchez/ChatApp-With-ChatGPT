import { Router } from "express";
import { sendMessage } from "../controller/openai.controller.js";
const router = Router();

router.post("/text", sendMessage);

export default router;
