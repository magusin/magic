const Extension = ({ sets }) => {
  console.log(sets);
  return (
    <div >
      {sets.map((item) => (
        <button key={item.name}>{item.name}</button>
      ))}
    </div>
  );
};

export default Extension;
