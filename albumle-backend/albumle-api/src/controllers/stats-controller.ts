import axios from "axios";
import type { Request, Response } from "express";

class StatsController {
  private static get baseUrl() {
    return `${process.env.LISTEN_BRAINZ_API_BASE_URL}/stats/sitewide`;
  }

  public static async releaseGroups(_req: Request, res: Response) {
    try {
      const response = await axios.get(
        `${StatsController.baseUrl}/release-groups`,
        {
          params: {
            range: "all_time",
            count: 250,
            offset: 0,
          },
        },
      );
      res.json(response.data.payload.release_groups);
    } catch (error) {
      console.error(error);
      res.status(502).json({ error: "Failed to fetch release groups" });
    }
  }
}

export default StatsController;
