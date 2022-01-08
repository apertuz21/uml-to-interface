import React, { useState } from "react";

import diagram from "../uml.json";

import AddForm from "./AddForm";
import EntityItem from "./EntityItem";

const EntityList = () => {
  const [entities, setEntities] = useState({});

  //console.log(entities, "contacts");

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
            <EntityItem
              name={name}
              methods={methods}
              attributes={formatedAttributes}
              entities={entities}
              setEntities={setEntities}
            />

            <h2>{`Agregar ${name}`}</h2>
            <AddForm
              entities={entities}
              setEntities={setEntities}
              attributes={formatedAttributes}
              entityName={name}
            />
          </>
        );
      })}
    </div>
  );
};

export default EntityList;
