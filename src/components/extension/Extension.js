import React, { useState, useEffect } from "react";

import { callSets } from "../../function"

const Extension = () => {

  const [sets, setSets] = useState([]);

  useEffect(() => {
    callSets().then(data => setSets(data.sets));
  }, []);

  console.log(sets);
    return (
      <div>
{sets.map((item) => (
  <button>{ item.name }</button>
  ))}
</div>
    );
  };
  
export default Extension;