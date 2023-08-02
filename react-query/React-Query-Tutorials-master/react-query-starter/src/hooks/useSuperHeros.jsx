import { useQuery } from "react-query";
import axios from "axios";
const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export const useSuperHeros = (OnSucsess, OnError) => {
  return useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      // defalut : true
      refetchOnMount: true,
      // defaut true
      refetchOnWindowFocus: true,
      //default true
      enabled: false,
      onSuccess: OnSucsess,
      onError: OnError,
    },
    {}
  );
};
