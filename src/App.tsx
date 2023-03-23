import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
