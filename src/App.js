import React, { useState } from "react";
import "./App.css";

import data from "./mock-data.json";
import diagram from "./uml.json";

import AddForm from "./components/AddForm";
import Table from "./components/Table";

const App = () => {
  const [contacts, setContacts] = useState({});

  console.log(contacts, "contacts");

  const formatAttributes = (attributes) => {
    const attributesArr = attributes.split("\n");
    const index = attributesArr.indexOf("");
    if (index > -1) attributesArr.splice(index, 1);
    return attributesArr;
  };

  return (
    <div className="app-container">
      {diagram.nodes.map(({ name, methods, attributes }) => {
        const formatedAttributes = formatAttributes(attributes);
        return (
          <>
            <Table
              name={name}
              methods={methods}
              attributes={formatedAttributes}
              contacts={contacts}
              setContacts={setContacts}
            />

            <h2>{`Agregar ${name}`}</h2>
            <AddForm
              contacts={contacts}
              setContacts={setContacts}
              attributes={formatedAttributes}
              entityName={name}
            />
          </>
        );
      })}
    </div>
  );
};

export default App;
