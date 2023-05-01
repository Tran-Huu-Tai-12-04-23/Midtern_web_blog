import { memo, useRef, lazy, Suspense, useState, useEffect } from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";

// import CreateNewFeed from "./CreateNewFeed";
// import Information from "../Information";
// import SuggestNewFriends from "../../Layout/Home/SuggestNewFriends";

const CreateNewFeed = lazy(() => import("./CreateNewFeed"));
const SuggestNewFriends = lazy(() =>
  import("../../Layout/Home/SuggestNewFriends")
);
const Information = lazy(() => import("../Information"));

const Content = ({ setShowModalPost = () => {}, posts = [] }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load more content here
        }
      });
    }, options);

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className="wrapper-Content w-100  custom-scroll position-relative"
      style={{
        height: "calc(100vh - 8rem)",
        overflow: "auto",
        paddingBottom: "2rem",
        zIndex: "10000",
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <CreateNewFeed handLeShowModalPost={() => setShowModalPost(true)} />
        {posts.map((newFeed, index) => {
          if ((index + 1) % 5 === 0 && newFeed?.post?.mode === false) {
            return (
              <div key={uuid()}>
                <SuggestNewFriends />
                <Information data={newFeed.post} />
              </div>
            );
          } else if (newFeed?.post?.mode === false) {
            return (
              <div key={uuid()}>
                <Information data={newFeed.post} />
              </div>
            );
          }
          return null; // Handle the case when the condition is not met
        })}
      </Suspense>
    </div>
  );
};

export default memo(Content);
