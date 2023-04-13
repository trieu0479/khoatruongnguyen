import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StatelessComponent from "./StatelessComponent";
import StatelfulComponents from "./StatelfulComponents";
import Button from "./components/Button";
import PageA from "./PageA";
import PageB from "./PageB";
import State from "./State";
import ComposeComponent from "./components/ComposeComponent/ComposeComponent";
import HandleEvent from "./HandleEvent";
import ConditionalRendering from "./ConditionalRendering";
import GuestGreeting from "./components/GuestGreeting/GuestGreeting";
import List from "./List";
import LiftingStateUp from "./LiftingStateUp";
import Form from "./Form";
import LifeCycle from "./LifeCycle";
import GenerateBox from "./components/GenerateBox/GenerateBox";
import UseState from "./UseState";
import BoxesColor from "./components/BoxesColor/BoxesColor";
import Refs from './Refs';
function App() {
  const [count, setCount] = React.useState(0); // local state of component

  const user = {
    name: "anvacs",
  };

  const myElement = (
    <div>
      <>my element</>
      <>my element</>
    </div>
  );
  // UI
  return (
    <div>
      <div className="App">
        {myElement} {user.name}
      </div>

      <div>anvacs</div>
      <div>eqewq</div>

      <StatelessComponent count={count} onClick={() => setCount(count + 1)} />

      <Button text="Increment" onClick={() => setCount(count + 1)} />

      <StatelfulComponents />

      <br />

      <PageA />
      <PageB />

      <br />
      <State />

      <br />
      <ComposeComponent />

      <p />

      <br />
      <HandleEvent />

      <br />
      <ConditionalRendering />

      <br />
      <GuestGreeting />
      <br />

      <List />

      <br />
      <LiftingStateUp />

      <br />
      <Form />

      <br />

      {count === 0 ? <LifeCycle /> : <div>test cleanup</div>}

      <br />
      <GenerateBox />
      <br />

      <UseState />

      <br />
      <BoxesColor />

      <br />
      <Refs />
      <br />
      <br />
    </div>
  );
}

export default App;
