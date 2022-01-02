import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";

import AddForm from "./components/AddForm";
import Table from "./components/Table";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [editContactId, setEditContactId] = useState(null);

  console.log(editContactId, "editContactId");

  return (
    <div className="app-container">
      <Table
        contacts={contacts}
        setContacts={setContacts}
        editContactId={editContactId}
        setEditContactId={setEditContactId}
      />

      <h2>Add a Contact</h2>
      <AddForm contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default App;
