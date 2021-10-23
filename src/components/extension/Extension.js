const Extension = ({ sets, setExtension }) => {
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
  );
};

export default Extension;
