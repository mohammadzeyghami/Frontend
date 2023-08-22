import React from "react";

const useSimple = (onSucess, onError) => {
  const fetchDatas = ({ address }) => {
    return axios.get(`http://localhost:4000/superheros${address}`);
  };
  useQuery("x", fetchDatas, {
    onSucess,
    onError,
  });
};

export default useSimple;

import React from "react";

const Page = () => {
  const { address } = useparams();
  const { data, isLoading } = useSimple(address);
  return <div>Page</div>;
};

export default Page;
