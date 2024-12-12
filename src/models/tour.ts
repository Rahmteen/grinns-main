import { createModel } from "@rematch/core";
import { collection, doc, DocumentData, getDocs } from "firebase/firestore";
import type { RootModel } from ".";
import { Album, ArtistEvent, EventDetails } from "@/types";
import axios from "axios";

export const tourModel = createModel<RootModel>()({
  state: {
    shows: [] as EventDetails[],
  },
  reducers: {
    setShows: (state, shows) => ({ ...state, shows }),
  },
  selectors: (slice) => ({
    selectShows: () => slice((state) => state?.shows),
  }),
  effects: () => ({
    async getShows() {
      const response = await axios.get("https://rest.bandsintown.com/artists/thegrinns/events", {
        params: {
          app_id: "984a6d759414fe6ac15614168a779aed", // Replace with your Bandsintown app ID
        },
      });
      if (response.data?.length) {
        const formattedEvents = response.data.map((show: ArtistEvent) => formatEventDetails(show));
        this.setShows(formattedEvents);
      }
    },
  }),
});

function formatEventDetails(event: ArtistEvent): EventDetails {
  const date = new Date(event.datetime);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";
  const formattedHour = hours % 12 || 12;
  const time = `${formattedHour}:${minutes}${period}`;

  return {
    day,
    month,
    time,
    tickets: event.offers[0]?.url || "",
    venue: event.venue.name,
    location: `${event.venue.city}, ${event.venue.region}`,
  };
}
