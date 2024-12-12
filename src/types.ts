export interface SpotifyAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: SpotifyArtist[];
  album_group: string;
}

export interface SpotifyArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

// ###

export interface Album {
  albumName: string;
  albumCover: string;
  links: {
    spotify: string;
    appleMusic: string;
  };
  releaseDate: string;
}

export interface EventDetails {
  day: number;
  month: string;
  time: string;
  tickets: string;
  venue: string;
  location: string;
}

export interface ArtistEvent {
  id: string;
  url: string;
  datetime: string;
  title: string;
  description: string;
  artist: Artist;
  venue: Venue;
  lineup: string[];
  offers: Offer[];
  free: boolean;
  artist_id: string;
  on_sale_datetime: string | null;
  festival_start_date: string | null;
  festival_end_date: string | null;
  festival_datetime_display_rule: string | null;
  starts_at: string | null;
  ends_at: string | null;
  datetime_display_rule: string;
  bandsintown_plus: boolean;
  presale: string | null;
  sold_out: boolean;
}

interface Artist {
  id: string;
  name: string;
  url: string;
  mbid: string;
  options: ArtistOptions;
  tracking: any[];
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  tracker_count: number;
  upcoming_event_count: number;
  support_url: string;
  links: ArtistLink[];
  artist_optin_show_phone_number: boolean;
  show_multi_ticket: boolean;
}

interface ArtistOptions {
  display_listen_unit: boolean;
}

interface ArtistLink {
  type: string;
  url: string;
}

interface Venue {
  location: string;
  name: string;
  latitude: string;
  longitude: string;
  street_address: string;
  postal_code: string;
  city: string;
  country: string;
  region: string;
}

interface Offer {
  type: string;
  url: string;
  status: string;
}
