import express from "express";
import { apiRouter } from "@/routers/index.js";

export const app = express();

app.use(express.json());

app.use("/api", apiRouter);
