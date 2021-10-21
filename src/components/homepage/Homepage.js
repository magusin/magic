import Language from "../language/Language";

const Homepage = ({
  translatedCards,
  language,
  setLanguage,
  page,
  setPage,
  availableLanguages
}) => {
  return (
    <div>
      <Language setLanguage={setLanguage} language={language} availableLanguages={availableLanguages}/>
      <div className="d-flex flex-wrap align-items-end">
        {(translatedCards || []).map((item) => (
          <div key={item.name} className="p-2 card">
            <h2>{item.name}</h2>
            <img alt={item.name} src={item.imageUrl} />
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Homepage;
