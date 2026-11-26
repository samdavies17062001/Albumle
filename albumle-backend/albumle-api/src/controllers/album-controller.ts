import type { Request, Response } from "express";
import AlbumControllerHelper from "@/controllers/helpers/album-controller-helper.js";
import { randint } from "@/utils/randint.js";
import type { Album } from "@/types/albumle/album.js";

class AlbumController {
  public static async getDailyAlbum(_req: Request, res: Response) {
    const popularReleaseGroups = await AlbumControllerHelper.getPopularReleaseGroups();
    const index = randint(popularReleaseGroups.length);
    const releaseGroup = popularReleaseGroups.at(index);

    if (!releaseGroup) {
      return res.status(500).send({ error: "No release groups available" });
    }
    const album: Album = {
      artist_name: releaseGroup.artist_name,
      album_name: releaseGroup.release_group_name,
      caa_id: releaseGroup.caa_id,
      caa_release_mbid: releaseGroup.caa_release_mbid,
    };

    res.json(album);
  }
}

export default AlbumController;
