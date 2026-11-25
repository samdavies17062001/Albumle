import { Router } from "express";
import { router as debugRouter } from "@/routers/debug-router.js";
import { router as statsrouter } from "@/routers/stats-router.js";

export const apiRouter = Router();

apiRouter.use("/debug", debugRouter);
apiRouter.use("/stats", statsrouter);
