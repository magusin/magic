import Language from "../language/Language";

const Extension = ({ sets, 
  setExtension,
  translatedCards,
  language,
  setLanguage,
  page,
  setPage,
  availableLanguages
}) => {
  // console.log(sets);

  function catch_value() {
    var target = document.getElementById("choose_sets").value;
    var opts = document.getElementById("sets").childNodes;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === target) {
        // An item was selected from the list!
        // yourCallbackHere()
        return opts[i].value;
      }
    }
  }

  return (
    <div>
    <div className="dropdown">
      <label htmlFor="choose_sets">Recherche extension :</label>
      <input
        list="sets"
        type="text"
        id="choose_sets"
        onInput={() => setExtension(catch_value())}
      />
      <datalist id="sets">
        {sets.map((item) => (
          <option key={item.name} value={item.name} />
        ))}
      </datalist>
    </div>
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
  </div>
  );
};

export default Extension;
