const Extension = ({ sets, setExtension }) => {
  console.log(sets);
  return (
    <div className="dropdown">
      <label htmlFor="choose_sets">Recherche extension :</label>
      <input list="sets" type="text" id="choose_sets"/>
      <datalist id="sets">
        {sets.map((item) => (
          <option
            onClick={() => setExtension(item.name)}
            key={item.name}
            value={item.name}
          />
          
        ))}
      </datalist>
    </div>
  );
};

export default Extension;
