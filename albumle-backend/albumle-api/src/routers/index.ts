import { Router } from "express";
import { router as debugRouter } from "@/routers/debug-router.js";

export const apiRouter = Router();

apiRouter.use("/debug", debugRouter);
