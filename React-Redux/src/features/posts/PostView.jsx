/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./postSlice";

const PostView = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  //   console.log("POST", post.data);
  return (
    <div>
      <h1>List of Posts</h1>
      {post.isLoading && <div>Loading...</div>}
      {!post.isLoading && post.error ? <div>Error: {post.error}</div> : null}
      {!post?.isLoading && post?.data?.length > 0 ? (
        <ul>
          {post?.data?.map((item) => {
            <li key={item?.id}>{item?.title}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default PostView;
