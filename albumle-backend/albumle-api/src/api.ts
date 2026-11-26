import axios from "axios";

export const listenbrainzClient = axios.create({
  baseURL: `${process.env.LISTENBRAINZ_API_BASE_URL}`,
  timeout: 10_000,
});
