import StatsController from "@/controllers/stats-controller.js";
import { Router } from "express";

export const router = Router();

router.get("/release-groups", StatsController.releaseGroups);
