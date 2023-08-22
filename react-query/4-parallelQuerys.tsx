import React from "react";

const useSimple = (onSucess, onError) => {
  const fetchDatas = () => {
    return axios.get("http://localhost:4000/superheros");
  };
};
const { data :dataOne} = useCustomQuery("x", fetchDatas, {
  onSucess,
  onError,
});
const { data :dataTwo} =useCustomQuery("x",useCustomQuery fetchDatas, {
  onSucess,
  onError,
});

export default useSimple;

import React from "react";

const Page = () => {
  const { data, isLoading } = useSimple();
  return <div>Page</div>;
};

export default Page;
