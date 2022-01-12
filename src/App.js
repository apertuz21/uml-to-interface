import React, { useState } from "react";

import EntityList from "./components/EntityList/EntityList";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/globalStyles";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  );
};

export default App;
