import { Router } from "express";
import { sendMessage, sendCode } from "../controller/openai.controller.js";
const router = Router();

router.post("/text", sendMessage);
router.post("/code", sendCode);

export default router;
