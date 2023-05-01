import PageSearch from "./PageSearch";

function MainSearch({ search, contentActive, theme }) {
  return (
    <div>
      <PageSearch search={search} theme={theme} contentActive={contentActive} />
    </div>
  );
}

export default MainSearch;
