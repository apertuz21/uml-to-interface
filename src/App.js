import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow.js";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  console.log(addFormData, "addFormData");
  console.log(editFormData, "editFormData");

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    setEditFormData({
      ...editFormData,
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = { id: editContactId, ...editFormData };

    setContacts(newContacts);

    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();

    const { id, fullName, address, phoneNumber, email } = contact;
    setEditContactId(id);

    setEditFormData({
      fullName: fullName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
    });
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
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
    </div>
  );
};

export default App;
