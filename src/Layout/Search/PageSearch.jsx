import ButtonCustom from "../../Components/ButtonCustom";
import Information from "../../Components/Information";
import { pages, peoples, posts } from "./data";

function PageSearch({ contentActive, theme }) {
  const loadPage = () => {
    return pages.map((page) => {
      return (
        <div
          key={page.id}
          className={`${
            !theme ? "hover-bg-dark" : "hover-bg-light"
          } d-flex justify-content-between align-items-center w-100 hover-bg  p-2 br-primary mb-2`}
          style={{
            cursor: "pointer",
          }}
        >
          <div className="start">
            <img className="avatar m-3" src={page.photoURL}></img>
            <div className="d-fex justify-content-center align-item-start flex-column">
              <h5
                style={{
                  fontSize: "1rem",
                }}
              >
                {page.namePage}
              </h5>
              <span
                className="mt-2"
                style={{
                  fontSize: ".8rem",
                  color: !theme ? "#ccc" : "#000",
                }}
              >
                {page.des}
              </span>
              <p
                className=" mt-2"
                style={{
                  fontSize: ".8rem",
                  color: !theme ? "#ccc" : "#000",
                }}
              >
                {page.detail}
              </p>
            </div>
          </div>
          <ButtonCustom
            name="Follow"
            backgroundColor="rgba(79, 132, 235, .2)"
            style={{
              color: "rgb(79, 132, 235)",
              fontSize: ".8rem",
              padding: "1rem",
              float: "right",
              marginRight: "1rem",
            }}
          />
        </div>
      );
    });
  };
  const loadPeople = () => {
    return peoples.map((people) => {
      return (
        <div
          key={people.id}
          className={`${
            !theme ? "hover-bg-dark" : "hover-bg-light"
          } d-flex justify-content-between align-items-center w-100 hover-bg  p-2 br-primary mb-2`}
          style={{}}
        >
          <div className="start">
            <img src={people.photoURL} className="avatar m-2"></img>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <h1
                style={{
                  fontSize: "1rem",
                  marginBottom: ".5rem",
                }}
              >
                {people.name}
              </h1>
              <span
                className=""
                style={{
                  fontSize: ".8rem",
                  color: !theme ? "#ccc" : "#000",
                }}
              >
                Bạn bè · Đại học Tôn Đức Thắng · Sống tại Thành phố Hồ Chí Minh
              </span>
            </div>
          </div>
          <ButtonCustom
            name="Send"
            backgroundColor="rgba(79, 132, 235, .2)"
            style={{
              color: "rgb(79, 132, 235)",
              fontSize: ".8rem",
              padding: "1rem",
              float: "right",
              marginRight: "1rem",
            }}
          />
        </div>
      );
    });
  };

  const loadPost = () => {
    return posts.map((post) => {
      return (
        <div key={post.id}>
          <Information data={post} />
        </div>
      );
    });
  };

  return (
    <>
      {(contentActive == 0 || contentActive == 2) && (
        <div
          className="p-4 br-primary w-100  d-flex justify-content-start align-items-start flex-column "
          style={{
            background: !theme
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
          }}
        >
          {loadPage()}
        </div>
      )}

      {(contentActive == 0 || contentActive == 1) && (
        <div
          className="p-4 mt-4 br-primary w-100  d-flex justify-content-start align-items-start flex-column"
          style={{
            background: !theme
              ? "rgba(255, 255, 255, .1)"
              : "rgba(0, 0, 0, .1)",
          }}
        >
          {loadPeople()}
        </div>
      )}

      {(contentActive == 0 || contentActive == 3) && (
        <div
          className="p-4 mt-4 br-primary w-100  d-flex justify-content-start align-items-start flex-column"
          style={{
            background: !theme
              ? "rgba(255, 255, 255, .1)"
              : "rgba(0, 0, 0, .1)",
          }}
        >
          {loadPost()}
        </div>
      )}
    </>
  );
}

export default PageSearch;
