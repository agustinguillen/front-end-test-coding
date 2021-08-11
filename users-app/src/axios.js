import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.github.com/search/users?q=GUILLEN",
});

export const detailURL = Axios.create({
    baseURL: "https://api.github.com/users",
});

