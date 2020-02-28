import { GET_SPECIES } from "../Config/constants";

import { API } from "../Config/api";

export const getSpecies = () => {
  return {
    type: GET_SPECIES,
    payload: async () => {
      const res = await API.get("/species");
      const { data } = res.data;
      // console.log(data);
      return data;
    }
  };
};
