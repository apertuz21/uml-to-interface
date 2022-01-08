import React, { useState } from "react";

import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow.js";

const Table = ({
  name,
  attributes,
  entities,
  entityInstanceID,
  setEntityInstanceID,
  editFormData,
  handleEditFormSubmit,
  setEditFormData,
  handleEditClick,
  handleDeleteClick,
}) => {
  const renderRow = () => {
    if (Object.keys(entities).length > 0) {
      return entities.hasOwnProperty(name) ? (
        entities[name].map((entity) => {
          return entityInstanceID === entity.id ? (
            <EditableRow
              key={entity.id}
              editFormData={editFormData}
              setEditFormData={setEditFormData}
              setEntityInstanceID={setEntityInstanceID}
              entity={entity}
            />
          ) : (
            <ReadOnlyRow
              key={entity.id}
              entity={entity}
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
