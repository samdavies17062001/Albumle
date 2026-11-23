import type { Request, Response } from "express";

class DebugController {
  public static get(_req: Request, res: Response) {
    res.json({ message: "Hello, World!" });
  }
}

export default DebugController;
