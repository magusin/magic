

const Extension = ({ sets, setExtension }) => {
  console.log(sets);
  return (
    
  <select class="selectpicker" data-live-search="true">
      {sets.map((item) => (
        <option 
        data-tokens={item.name}>{item.name}</option>
      ))}
       </select>
       
  );
};

export default Extension;
