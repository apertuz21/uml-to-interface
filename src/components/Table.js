import React, { useState } from "react";

import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow.js";

const Table = ({ contacts, setContacts, editContactId, setEditContactId }) => {
  const [editFormData, setEditFormData] = useState("");

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

    console.log(contact, "oli");

    setEditFormData(contact);
    setEditContactId(contact.id);
  };

  const handleDeleteClick = (id) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((c) => c.id === id);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="table-container">
      <div className="table-title-wrapper">
        <h1>Empleados</h1>
      </div>
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
            {contacts.map((contact) => {
              return editContactId === contact.id ? (
                <EditableRow
                  key={contact.id}
                  editFormData={editFormData}
                  setEditFormData={setEditFormData}
                  setEditContactId={setEditContactId}
                  contactInfo={contact}
                />
              ) : (
                <ReadOnlyRow
                  key={contact.id}
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
