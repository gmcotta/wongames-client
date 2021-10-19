/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getGames
// ====================================================

export interface getGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface getGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface getGames_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: getGames_games_cover | null;
  developers: getGames_games_developers[];
  price: number;
}

export interface getGames {
  games: getGames_games[];
}

export interface getGamesVariables {
  limit: number;
}
