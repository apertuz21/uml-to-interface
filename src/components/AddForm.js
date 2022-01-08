import React, { useState } from "react";

import { nanoid } from "nanoid";

const AddForm = ({ entities, setEntities, entityName, attributes }) => {
  const [addFormData, setAddFormData] = useState({});

  const clearData = () => {
    const clearObj = {};
    const keys = Object.keys(addFormData);

    keys.forEach((key) => (clearObj[key] = ""));

    setAddFormData(clearObj);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    if (entities.hasOwnProperty(entityName)) {
      setEntities({
        ...entities,
        [entityName]: [
          ...entities[entityName],
          { id: nanoid(), entityName: entityName, ...addFormData },
        ],
      });
    } else {
      setEntities({
        ...entities,
        [entityName]: [
          { id: nanoid(), entityName: entityName, ...addFormData },
        ],
      });
    }

    clearData();
  };
  return (
    <form onSubmit={handleAddFormSubmit}>
      {attributes.map((attribute) => (
        <input
          type="text"
          name={attribute}
          value={addFormData[attribute]}
          required="required"
          placeholder={`Ingresa ${attribute}`}
          onChange={handleAddFormChange}
        />
      ))}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
