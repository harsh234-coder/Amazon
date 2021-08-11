import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./StateProvider";
import App from "./App";
import reducer, { initialState } from "./reducer";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
