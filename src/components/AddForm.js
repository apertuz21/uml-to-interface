import React, { useState } from "react";

import { nanoid } from "nanoid";

const AddForm = ({ contacts, setContacts, entityName, attributes }) => {
  const [addFormData, setAddFormData] = useState({});

  const handleAddFormChange = (event) => {
    event.preventDefault();

    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const clearData = () => {
    const clearObj = {};
    const keys = Object.keys(addFormData);

    keys.forEach((key) => (clearObj[key] = ""));

    setAddFormData(clearObj);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    if (contacts.hasOwnProperty(entityName)) {
      setContacts({
        ...contacts,
        [entityName]: [
          ...contacts[entityName],
          { id: nanoid(), entityName: entityName, ...addFormData },
        ],
      });
    } else {
      setContacts({
        ...contacts,
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
      {/* <input
        type="text"
        name="fullName"
        value={addFormData.fullName}
        required="required"
        placeholder="Enter a name..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="address"
        value={addFormData.address}
        required="required"
        placeholder="Enter an addres..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="phoneNumber"
        value={addFormData.phoneNumber}
        required="required"
        placeholder="Enter a phone number..."
        onChange={handleAddFormChange}
      />
      <input
        type="email"
        name="email"
        value={addFormData.email}
        required="required"
        placeholder="Enter an email..."
        onChange={handleAddFormChange}
      /> */}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
