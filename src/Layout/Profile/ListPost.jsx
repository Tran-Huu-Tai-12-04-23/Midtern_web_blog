import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { AppStoreUseContext } from "../../Context/AppStore";
import { AuthUserUseContext } from "../../Context/AuthUser";
import Information from "../../Components/Information";

function ListPost({ userSelectShowProfile }) {
  const { user } = AuthUserUseContext();
  const { posts } = AppStoreUseContext();
  const [postUser, setPostUser] = useState([]);
  useEffect(() => {
    let newPostUser = [];
    posts.map((post) => {
      if (
        post.user_id === userSelectShowProfile?.user_id ||
        post.user_id === userSelectShowProfile?.id
      ) {
        newPostUser.push(post);
      } else if (
        !userSelectShowProfile &&
        (post.user_id === user?.user_id || post.user_id === user?.id)
      ) {
        newPostUser.push(post);
      }
    });
    setPostUser(newPostUser);
  }, [userSelectShowProfile]);

  function loadPostUser() {
    return postUser.map((post) => {
      return (
        <div key={uuid()}>
          <Information data={post.post} />
        </div>
      );
    });
  }

  return <>{postUser && loadPostUser()} </>;
}

export default ListPost;
