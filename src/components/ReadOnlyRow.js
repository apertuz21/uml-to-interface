import React from "react";

const ReadOnlyRow = ({ entity, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      {Object.keys(entity).map((key) =>
        key !== "id" && key !== "entityName" ? (
          <td key={key}>{entity[key]}</td>
        ) : (
          <></>
        )
      )}
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, entity)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(entity.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
