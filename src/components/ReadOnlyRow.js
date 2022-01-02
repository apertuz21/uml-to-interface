import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  const { id, fullName, address, phoneNumber, email } = contact;

  return (
    <tr>
      <td>{fullName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
