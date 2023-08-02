import { useSuperHeros } from "../hooks/useSuperHeros";

export const RQSuperHeroesPage = () => {
  const OnSucsess = () => {
    console.log("on Sucsess");
  };
  const OnError = () => {
    console.log("OnError");
  };
  const { isLoading, data, isError, error, refetch } = useSuperHeros(
    OnSucsess,
    OnError
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
      {data?.data.map((item, index) => (
        <div key={item.name + index}>{item.name}</div>
      ))}
    </div>
  );
};
