import PageSearch from "./PageSearch";

function MainSearch({ contentActive, theme }) {
  return (
    <div>
      <PageSearch theme={theme} contentActive={contentActive} />
    </div>
  );
}

export default MainSearch;
