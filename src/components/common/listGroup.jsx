import React from 'react';

const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;

    let getClasses = (item) => {
      let classes = "list-group-item";
      classes += (item === selectedItem) ? " active" : "";
      return classes;
    };

  return (
      <ul className="list-group">
          {items.map(item => (
            <li onClick={() => onItemSelect(item)} key={item[valueProperty]} className={getClasses(item)}>
                {item[textProperty]}
            </li>
          ))}
      </ul>
    );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: "_id"
}

export default ListGroup;

