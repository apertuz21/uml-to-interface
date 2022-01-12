import React, { useState } from "react";

import diagram from "../../uml.json";

import AddForm from "../AddForm/AddForm";
import EntityItem from "./EntityItem";
import { EntityItemContainer, Text, TextWrapper, Message } from "./styles";

const EntityList = ({ data }) => {
  const [entities, setEntities] = useState({});

  //console.log(diagram, "diagram");
  //console.log(data, "data");

  //console.log(entities, "contacts");

  const formatProperties = (properties) => {
    const propertiesArr = properties.split("\n"); // [name, age, data]
    const index = propertiesArr.indexOf("");
    if (index > -1) propertiesArr.splice(index, 1);
    return propertiesArr;
  };

  return (
    <div>
      <TextWrapper>
        <Text>Resultados</Text>
      </TextWrapper>

      {data ? (
        data.nodes.map(({ name, methods, attributes }) => {
          const formatedAttributes = formatProperties(attributes);
          const formatedMethods = formatProperties(methods);
          console.log(formatedMethods, "formatedMethods");
          return (
            <EntityItemContainer>
              <EntityItem
                name={name}
                methods={formatedMethods}
                attributes={formatedAttributes}
                entities={entities}
                setEntities={setEntities}
              />

              {formatedMethods.find(
                (method) => method.toLowerCase() === "add()"
              ) ? (
                <AddForm
                  entities={entities}
                  setEntities={setEntities}
                  attributes={formatedAttributes}
                  entityName={name}
                />
              ) : (
                <></>
              )}
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
