export let apiUrl = "https://shop-8sc7.onrender.com";
export const googleClientId =
  "163796225030-mihi8qo1v96g5f2ifph79ou2r3li7tkf.apps.googleusercontent.com";

if (process.env.REACT_APP_ENV === "test") {
  apiUrl = "https://shop-8sc7.onrender.com";
}
