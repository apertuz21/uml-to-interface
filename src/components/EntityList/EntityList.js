import React, { useState } from "react";

import diagram from "../../uml.json";

import AddForm from "../AddForm/AddForm";
import EntityItem from "./EntityItem";
import { EntityItemContainer, Text, TextWrapper, Message } from "./styles";

const EntityList = ({ data }) => {
  const [entities, setEntities] = useState({});

  console.log(diagram, "diagram");
  console.log(data, "data");

  //console.log(entities, "contacts");

  const formatAttributes = (attributes) => {
    const attributesArr = attributes.split("\n");
    const index = attributesArr.indexOf("");
    if (index > -1) attributesArr.splice(index, 1);
    return attributesArr;
  };

  return (
    <div>
      <TextWrapper>
        <Text>Resultados</Text>
      </TextWrapper>

      {data ? (
        data.nodes.map(({ name, methods, attributes }) => {
          const formatedAttributes = formatAttributes(attributes);
          return (
            <EntityItemContainer>
              <EntityItem
                name={name}
                methods={methods}
                attributes={formatedAttributes}
                entities={entities}
                setEntities={setEntities}
              />

              <AddForm
                entities={entities}
                setEntities={setEntities}
                attributes={formatedAttributes}
                entityName={name}
              />
            </EntityItemContainer>
          );
        })
      ) : (
        <Message>
          <p>No hay entidades</p>
        </Message>
      )}
    </div>
  );
};

export default EntityList;
