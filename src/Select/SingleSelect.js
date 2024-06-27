import React, { useState } from 'react';

const SingleSelect = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      {items.map(item => (
        <div key={item} onClick={() => setSelectedItem(item)} style={{ cursor: 'pointer', background: selectedItem === item ? 'lightblue' : 'white' }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default SingleSelect;