import DebugController from "@/controllers/debug-controller.js";
import { Router } from "express";

export const router = Router();

router.get("", DebugController.get);
