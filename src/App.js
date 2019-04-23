import React from 'react';
import List from './List';
import navigationConfig from './options/navigation';
import checkboxConfig from './options/checkbox';
import multipleConfig from './options/multiple';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>List 1 - navigation</h1>
      <List data={navigationConfig} />

      <h1>List 2 - checkbox</h1>
      <List data={checkboxConfig} />

      <h1>List 3 - multiple checkbox</h1>
      <List data={multipleConfig} />
    </div>
  );
}

export default App;
