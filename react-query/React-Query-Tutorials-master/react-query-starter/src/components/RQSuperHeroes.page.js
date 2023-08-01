import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      // defalut : true
      refetchOnMount: true,
      // defaut true
      refetchOnWindowFocus: true,
      //default true
      enabled: false,
    },
    {}
  );

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  if (isLoading) {
    return <h1>is loading ... hoooy</h1>;
  }
  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {data?.data.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};
