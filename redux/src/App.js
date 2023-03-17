import React from 'react';
import Display from './components/Display';
import Input from './components/Input';
import {Button} from 'antd';
import CreateNote from './components/CreateNote';
import ListNotes from './components/ListNotes';

function App() {
  return (
    <div className="App">
      <Input />
      <Display />
      <CreateNote />
      <ListNotes />
    </div>
  );
}

export default App;
