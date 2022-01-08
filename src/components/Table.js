import React, { useState } from "react";

import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow.js";

const Table = ({ name, methods, attributes, contacts, setContacts }) => {
  const [editFormData, setEditFormData] = useState({});
  const [editContactId, setEditContactId] = useState(null);
  const [editEntityName, setEditEntityName] = useState(null);

  const renderRow = () => {
    if (Object.keys(contacts).length > 0) {
      return contacts.hasOwnProperty(name) ? (
        contacts[name].map((contact) => {
          return editContactId === contact.id ? (
            <EditableRow
              key={contact.id}
              attributes={attributes}
              editFormData={editFormData}
              setEditFormData={setEditFormData}
              setEditContactId={setEditContactId}
              contact={contact}
            />
          ) : (
            <ReadOnlyRow
              key={contact.id}
              contact={contact}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          );
        })
      ) : (
        <></>
      );
    }
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const newContacts = { ...contacts };

    const index = newContacts[name].findIndex(
      (contact) => contact.id === editContactId
    );

    newContacts[name][index] = { id: editContactId, ...editFormData };

    setContacts(newContacts);

    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();

    console.log(contact, "oli");

    setEditFormData(contact);
    setEditContactId(contact.id);
    setEditEntityName(contact.entityName);
  };

  const handleDeleteClick = (id) => {
    const newContacts = { ...contacts };

    const index = contacts[name].findIndex((c) => c.id === id);

    newContacts[name].splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="table-container">
      <div className="table-title-wrapper">
        <h1>{name}</h1>
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              {attributes.map((attribute) => (
                <th>{attribute}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderRow()}</tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
