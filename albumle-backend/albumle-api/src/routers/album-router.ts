import AlbumController from "@/controllers/album-controller.js";
import { Router } from "express";

export const router = Router();

router.get("/daily", AlbumController.getDailyAlbum);
