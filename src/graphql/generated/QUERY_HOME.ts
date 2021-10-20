/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QUERY_HOME
// ====================================================

export interface QUERY_HOME_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QUERY_HOME_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QUERY_HOME_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QUERY_HOME_banners {
  __typename: "Banner";
  image: QUERY_HOME_banners_image | null;
  title: string;
  subtitle: string;
  button: QUERY_HOME_banners_button | null;
  ribbon: QUERY_HOME_banners_ribbon | null;
}

export interface QUERY_HOME {
  banners: QUERY_HOME_banners[];
}
