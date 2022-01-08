import React from "react";

const ReadOnlyRow = ({
  contact,
  attributes,
  values = [],
  handleEditClick,
  handleDeleteClick,
}) => {
  //const { id, fullName, address, phoneNumber, email } = contact;

  return (
    <tr>
      {Object.keys(contact).map((key) =>
        key !== "id" && key !== "entityName" ? <td>{contact[key]}</td> : <></>
      )}
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
