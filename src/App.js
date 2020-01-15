import React from 'react';
import './App.css';
import { Pages } from './pages.js';
import { Header } from './header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pages />
    </div>
  );
}

export default App;
