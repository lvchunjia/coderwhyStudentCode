import hyRequest from "./index.js";

export const getHomeMutidata = () => {
  return hyRequest.get("/home/multidata", {});
};
