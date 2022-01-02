import React, { useState } from "react";

import { nanoid } from "nanoid";

const AddForm = ({ contacts, setContacts }) => {
  const [addFormData, setAddFormData] = useState({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContacts = [...contacts, { id: nanoid(), ...addFormData }];
    setContacts(newContacts);

    setAddFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  };
  return (
    <form onSubmit={handleAddFormSubmit}>
      <input
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
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
