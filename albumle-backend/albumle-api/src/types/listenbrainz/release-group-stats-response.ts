import type { ReleaseGroup } from "@/types/listenbrainz/release-group.js";

export type ReleaseGroupStatsResponse = {
  count: number;
  from_ts: number;
  last_updated: number;
  offset: number;
  range: string;
  release_groups: ReleaseGroup[];
};
