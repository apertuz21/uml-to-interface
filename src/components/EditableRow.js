import React, { useState } from "react";

const EditableRow = ({
  setEditContactId,
  editFormData,
  setEditFormData,
  contact,
}) => {
  const handleEditFormChange = (event) => {
    event.preventDefault();

    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  return (
    <tr>
      {Object.keys(contact).map((key) =>
        key !== "id" && key !== "entityName" ? (
          <td>
            <input
              type="text"
              required="required"
              placeholder={`Ingresa ${key}`}
              name={key}
              value={editFormData[key]}
              onChange={handleEditFormChange}
            ></input>
          </td>
        ) : (
          <></>
        )
      )}
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
