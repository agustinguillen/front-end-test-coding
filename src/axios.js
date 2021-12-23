import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.github.com/search",
});

export const detailURL = Axios.create({
    baseURL: "https://api.github.com/users",
});

