import { listenbrainzClient } from "@/api.js";
import type { ReleaseGroup } from "@/types/listenbrainz/release-group.js";
import type { AxiosResponse } from "axios";

class AlbumControllerHelper {
  public static async getPopularReleaseGroups(): Promise<ReleaseGroup[]> {
    try {
      const response: AxiosResponse = await listenbrainzClient.get(
        "/stats/sitewide/release-groups",
        {
          params: {
            range: "all_time",
            count: 250,
            offset: 0,
          },
        },
      );
      console.log(response);
      return response.data.payload.release_groups; // TODO: The response from ListenBrainz should be typed
    } catch (error) {
      console.log(error);
      throw new Error("Failed to retrieve popular albums from ListenBrainz API.");
    }
  }
}

export default AlbumControllerHelper;
