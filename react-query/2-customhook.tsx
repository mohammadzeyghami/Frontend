import React from "react";

const useSimple = (onSucess, onError) => {
  const fetchDatas = () => {
    return axios.get("http://localhost:4000/superheros");
  };
  useQuery("x", fetchDatas, {
    onSucess,
    onError,
  });
};

export default useSimple;

import React from "react";

const Page = () => {
  const { data, isLoading } = useSimple();
  return <div>Page</div>;
};

export default Page;
