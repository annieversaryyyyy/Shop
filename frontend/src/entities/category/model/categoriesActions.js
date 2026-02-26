import baseApi from "../../../shared/api/baseApi";

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";

const fetchCategoriesRequest = () => ({ type: FETCH_CATEGORIES_REQUEST });
const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoriesRequest());
      const response = await baseApi("/categories");
      dispatch(fetchCategoriesSuccess(response.data));
    } catch (e) {
      console.error(e);
    }
  };
};
