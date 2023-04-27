import CardProfile from "./CardProfile";
import ListFriendSuggest from "./ListFriendSuggest";

const Sidebar = () => {
  return (
    <div
      className="wrapper-sidebar"
      style={{ width: "95%", marginLeft: "1rem" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <CardProfile />
            <ListFriendSuggest />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
