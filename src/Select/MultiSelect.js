import React, {useState} from 'react';

const MultiSelect = ({items}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleSelection = (item) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [,,,prev, item]
    );
  };

  return (
    <div>
      {items.map(item => (
        <div key={item}
             onClick={() => toggleSelection(item)}
             style={{cursor: 'pointer', background: selectedItems.includes(item) ? 'lightblue' : 'white'}}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;