import { createModel } from "@rematch/core";
import type { RootModel } from ".";
import axios from "axios";
import { SpotifyAlbum } from "@/types";

interface SpotifyModelState {
  accessToken: string | null;
  artistAlbums: SpotifyAlbum[] | null;
  latestRelease: SpotifyAlbum[] | null;
}

export const spotifyModel = createModel<RootModel>()({
  state: {
    accessToken: null,
    artistAlbums: null,
    latestRelease: null,
  } as SpotifyModelState,
  reducers: {
    setAccessToken: (state, accessToken) => ({ ...state, accessToken }),
    setArtistAlbums: (state, artistAlbums) => ({ ...state, artistAlbums }),
    setLatestRelease: (state, latestRelease) => ({ ...state, latestRelease }),
  },
  selectors: (slice) => ({
    selectAccessToken: () => slice((state) => state.accessToken),
    selectArtistAlbums: () => slice((state) => state.artistAlbums),
    selectLatestRelease: () => slice((state) => state.latestRelease),
  }),
  effects: () => ({
    async getAccessToken() {
      const spotifyTokenRequestUrl = "https://accounts.spotify.com/api/token";
      try {
        const response = await axios.post(
          spotifyTokenRequestUrl,
          new URLSearchParams({
            grant_type: "client_credentials",
            client_id: "90481dcecb3e45439a4d8c0e19f2ee7c",
            client_secret: "7710e4bfa0e9447288b278c9ddeb7650",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        this.setAccessToken(response.data.access_token);
        this.getArtistAlbums(response.data.access_token);
        this.getLatestRelease(response.data.access_token);
      } catch (error) {
        console.error("Error fetching Spotify token:", error);
      }
    },
    async getArtistAlbums(accessToken: string) {
      const artistId = "196MfFl5VIfyX1ZBmJeWHc";
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          include_groups: "album",
        },
      };
      try {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, config);
        if (response.data) {
          const filteredAlbums = response.data.items.filter(
            (album: SpotifyAlbum) => album.name !== "Jam in the Van - The Grinns (Live Session, Los Angeles, CA 2019)"
          );
          this.setArtistAlbums(filteredAlbums);
        }
      } catch (error) {
        console.error("Error fetching Spotify token:", error);
      }
    },
    async getLatestRelease(accessToken: string) {
      const artistId = "196MfFl5VIfyX1ZBmJeWHc";
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: {
          include_groups: "single", // Fetch albums and singles
          limit: 1, // Get only the latest release
          sort: "release_date:desc", // Sort by latest release date
        },
      };

      try {
        const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, config);
        const latestRelease = response.data.items[0]; // Get the first item (latest)
        this.setLatestRelease(latestRelease);
      } catch (error) {
        console.error("Error fetching latest release:", error);
      }
    },
  }),
});
