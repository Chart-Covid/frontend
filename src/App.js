import React from "react";

import Home from "./pages/Home/index.js";
import Context from "./Context";

function App() {
  return (
    <Context.Provider>
      <Home />
    </Context.Provider>
  );
}

export default App;
