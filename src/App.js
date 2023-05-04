import React, { useCallback } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
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
import UseEffect from "./useEffect";
import { Book } from './pages/Book';
import BoxesColor from "./components/BoxesColor/BoxesColor";
import Refs from './Refs';
import MemoComponent from './MemoComponent';
import Portal from './Portal';
import About from "./pages/About/About";
import AboutDetail from "./pages/About/AboutDetail";
import AboutNew from "./pages/About/AboutNew";

function App() {
  const [count, setCount] = React.useState(0); // local state of component
  const [user, setUser] = React.useState({
    name: 'tony',
    title: 'react'
  }); // local state of component

  // first render -> callfunction memory A
  // next render -> callfunction memory B
  const callbackFunction = React.useCallback(() => {
    console.log('test callback function', count) // memories result function
  }, [count])

  const sum = React.useMemo(() => {
    return count + 1
  }, [count])

  console.log('sum useMemo: ', sum)

  const myElement = (
    <div>
      <>my element</>
      <>my element</>
    </div>
  );
  
  // UI
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li><NavLink to="/pageA">Page A</NavLink></li>
        <li><NavLink to="/pageB">Page B</NavLink></li>
        <li><NavLink to="/stateless-component">Stateless Component</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/about/12321">About Detail</NavLink></li>
        <li><NavLink to="/about/news">About News</NavLink></li>
      </ul>


      {/* config route */}
      <Routes>
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/about/news" element={<AboutNew />} />
        <Route path="/about/:id" element={<AboutDetail />} /> */}
        <Route path="/about" element={<About />}>
          <Route path="news" element={<AboutNew />} />
          <Route path=":id" element={<AboutDetail />} />
        </Route>
        <Route 
          path="/stateless-component" 
          element={
            <StatelessComponent count={count} onClick={() => setCount(count + 1)} />
          } 
        />
      </Routes>
      <br />
      <hr />
      <br />


      
      <div className="App">
        {myElement} {user.name}
        <Button text="Update User" onClick={() => {
          const newUser = { ...user, name: `tony-${Date.now()}` };
          setUser(newUser)
        }} />
      </div>

      <div>anvacs</div>
      <div>eqewq</div>

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

      <br />
      <UseEffect />

      <br />
      <br/>
      <Book />

      <BoxesColor />

      <br />
      <Refs />

      <br />
      <MemoComponent user={user} handleUpdate={callbackFunction} />

      <br />

      <Portal />


      <br />
      <br />
    </div>
  );
}

export default App;
