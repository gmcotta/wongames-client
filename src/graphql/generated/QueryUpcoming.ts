/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_CONTENTALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcoming_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_upcomingGames {
  __typename: "Game";
  name: string;
  slug: string;
  developers: QueryUpcoming_upcomingGames_developers[];
  cover: QueryUpcoming_upcomingGames_cover | null;
  price: number;
}

export interface QueryUpcoming_sections_upcomingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_sections_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_sections_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcoming_sections_upcomingGames_highlight_background | null;
  floatImage: QueryUpcoming_sections_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  contentAlignment: ENUM_COMPONENTPAGEHIGHLIGHT_CONTENTALIGNMENT | null;
}

export interface QueryUpcoming_sections_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcoming_sections_upcomingGames_highlight | null;
}

export interface QueryUpcoming_sections {
  __typename: "Home";
  upcomingGames: QueryUpcoming_sections_upcomingGames | null;
}

export interface QueryUpcoming {
  upcomingGames: QueryUpcoming_upcomingGames[];
  sections: QueryUpcoming_sections | null;
}

export interface QueryUpcomingVariables {
  date: any;
}
