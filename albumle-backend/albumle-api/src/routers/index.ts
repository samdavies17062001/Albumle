import { Router } from "express";
import { router as debugRouter } from "@/routers/debug-router.js";
import { router as albumRouter } from "@/routers/album-router.js";

export const apiRouter = Router();

apiRouter.use("/debug", debugRouter);
apiRouter.use("/album", albumRouter);
