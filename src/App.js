import React from "react";
import Counterapp from "./Counter";
import Stateprops from "./Stateprops";
import ReactForm from "./Form";
import ReactExample from "./Components/RoutingExample";
import Pagenation from "./Components/Pagenation";
import PasswordRegex from "./Components/Password";

function App() {
  return (
    <div>
      <Counterapp />
      <Stateprops />
      <ReactForm />
      <br></br>
      <ReactExample />
      <br></br>
      <Pagenation />
      <PasswordRegex />
    </div>
  );
}

export default App;