import React, { useState } from "react";
import Box from "../components/Box/Box";
import EntityList from "../components/EntityList/EntityList";
import Layout from "../components/Layout/Layout";
import NavBar from "../components/Navbar/Navbar";
import UploadFile from "../components/UploadFile/UploadFile";
import {
  Wrapper,
  Text,
  InputFile,
  InputFileWrapper,
} from "../components/UploadFile/styles";
import { Button } from "../styles/common";

const Home = () => {
  const [file, setFile] = useState(null);
  const [json, setJSON] = useState(null);

  //console.log(file, "archivo");

  const onFileChange = (e) => {
    // Update the state
    setFile(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      // console.log("e.target.result", e.target.result);
      setJSON(JSON.parse(e.target.result));
    };
  };

  return (
    <Layout>
      <Box />
      <Wrapper>
        <Text>{file?.name || "Sube un archivo .json"}</Text>
        <InputFileWrapper>
          <InputFile type="file" onChange={onFileChange} />
          <p>Subir archivo</p>
        </InputFileWrapper>
      </Wrapper>
      <EntityList data={json} />
    </Layout>
  );
};

export default Home;
