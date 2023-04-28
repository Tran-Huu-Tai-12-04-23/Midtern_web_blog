import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { AppStoreUseContext } from "../../Context/AppStore";
import { AuthUserUseContext } from "../../Context/AuthUser";
import Information from "../../Components/Content/Information";

function ListPost() {
  const { posts } = AppStoreUseContext();
  const { user } = AuthUserUseContext();
  const [postUser, setPostUser] = useState([]);
  useEffect(() => {
    let newPostUser = [];
    posts.map((post) => {
      if (post.user_id === user.id) {
        newPostUser.push(post);
      }
    });
    setPostUser(newPostUser);
  }, [posts]);
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
