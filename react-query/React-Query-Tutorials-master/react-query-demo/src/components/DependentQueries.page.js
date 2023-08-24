import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  // here we fetch data from that api
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  // we set api data on channel id
  const channelId = user?.data?.channelId;
  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    // here we say if we have channel id you can fetch data
    enabled: !!channelId,
  });
  return <div>DependentQueries</div>;
};
