// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchDatas = () => {
//   return axios.get("http://localhost:4000/superheros");
// };

// export const useSimple = (onError, onSuccess) => {
//   return useQuery("simple", fetchDatas, {
//     onSuccess,
//     onError,
//     select: (data) => {
//       const superHeroNames = data.data.map((hero) => hero.name);
//       return superHeroNames;
//     },
//   });
// };

import axios from "axios";
import { useEffect, useState } from "react";

const useSimple = () => {
  const [datas, setDatas] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/superheros`)
      .then((res) => console.log(res));
  }, []);
  return datas;
};

export default useSimple;
