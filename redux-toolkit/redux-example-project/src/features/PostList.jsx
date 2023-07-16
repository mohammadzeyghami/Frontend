import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderPosts = posts.map((post) => (
    <div key={post.id}>
      <div>{post.title}</div>
      <div>{post.content?.substring(0, 100)}</div>
    </div>
  ));
  return (
    <div>
      <div>Posts</div>
      <div>{renderPosts}</div>
    </div>
  );
};

export default PostList;
