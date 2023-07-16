import Addform from "./Addform";
import PostList from "./PostList";
const Main = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Addform />
      <PostList />
    </div>
  );
};

export default Main;
