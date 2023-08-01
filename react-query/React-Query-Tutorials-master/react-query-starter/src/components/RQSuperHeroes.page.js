import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes1");
};
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heros",
    fetchSuperHeros
  );

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h1>is loading ... hoooy</h1>;
  }
  return (
    <div>
      {data?.data.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};