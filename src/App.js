import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Hello from './components/Hello';
import Stylesheet from './components/Stylesheet';

function App() {
  return (
    <div className="App">
    <Counter/>
      <Stylesheet/>
      <Greet name="Bruce" heroName="Batman">
        <p>This is child paragraph.</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
      <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" />
    </div>
  );
}

export default App;