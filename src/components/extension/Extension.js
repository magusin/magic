const Extension = ({ sets, setExtension }) => {
  console.log(sets);
  return (
    <div >
      {sets.map((item) => (
        <button onClick={() => setExtension(item.name)} key={item.name}>{item.name}</button>
      ))}
    </div>
  );
};

export default Extension;
