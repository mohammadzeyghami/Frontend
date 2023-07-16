// what is swr ?
// swr is a method give us options to handle apis

// first we need fetch api with fetch or axios

const fetcher = (...args) => fetch(...args).then((res) => res.json());

import useSWR from "swr";

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user/123", fetcher);

  // if returns error

  if (error) return <div>failed to load</div>;

  //else if in loading

  if (isLoading) return <div>loading...</div>;

  // render data
  return <div>hello {data.name}!</div>;
}

// make it reusable

//create a function

function useUser(id) {
  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

//in function use that

function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return <img src={user.avatar} />;
}
