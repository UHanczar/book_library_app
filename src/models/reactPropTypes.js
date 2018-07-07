import PropTypes from 'prop-types';

export const bookInterface = {
  authors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  pathName: PropTypes.string,
  publisher: PropTypes.string,
  year: PropTypes.string,
  pages: PropTypes.string,
  rating: PropTypes.string,
  description: PropTypes.string,
  isAvailable: PropTypes.bool,
  _id: PropTypes.string,
  ratingData: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.string,
    ratinig: PropTypes.string
  }))
};

export const userDataInterface = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  login: PropTypes.string,
  isAdmin: PropTypes.bool,
  created: PropTypes.string
};

export const userInterface = {
  loading: PropTypes.bool,
  userData: PropTypes.shape(userDataInterface)
};

export const categoryInterface = {
  categoryName: PropTypes.string,
  categoryPathName: PropTypes.string
};
