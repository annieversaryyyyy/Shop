export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});
export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});


