export interface Launch {
  crew: string;
  details: string;
  flight_number: number;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_failure_details: LaunchFailureDetails;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_window: number;
  launch_year: string;
  links: Links;
  mission_id: []
  mission_name: string;
  rocket: Rocket;
  ships: []
  static_fire_date_unix: number
  static_fire_date_utc: string;
  tbd: boolean;
  telemetry: Telemetry;
  tentative_max_precision: string;
  timeline: AnimationTimeline;
  upcoming: boolean;
}

export interface LaunchFailureDetails {
  altitude: number;
  reason: string;
  time: number;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Links {
  article_link: string;
  flickr_images: []
  mission_patch: string;
  mission_patch_small: string;
  presskit: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_media: string;
  reddit_recovery: string;
  video_link: string;
  wikipedia: string;
  youtube_id: string;
}

export interface Rocket {
  fairings: any
  first_stage: any
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  second_stage: any;
}

export interface Telemetry {
  flight_club: string;
}
