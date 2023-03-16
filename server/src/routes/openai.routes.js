import { Router } from "express";
import {
  sendMessage,
  sendCode,
  sendAssist,
} from "../controller/openai.controller.js";
const router = Router();

router.post("/text", sendMessage);
router.post("/code", sendCode);
router.post("/assist", sendAssist);

export default router;
