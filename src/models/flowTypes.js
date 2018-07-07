// @flow

export type bookInterfaceFlow = {
  _id: string,
  authors: [string],
  name: string,
  pathName: string,
  publisher: string,
  year: string,
  pages: string,
  rating: string,
  description?: string,
  isAvailable: boolean,
  ratingData: Array<{
    userId: string,
    rating: string
  }>
};

export type userInterfaceFlow = {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  login: string,
  isAdmin: boolean,
  created: string
};

export type categoryInterfaceFlow = {
  categoryName: string,
  categoryPathName: string
};
