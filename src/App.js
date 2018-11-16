import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import FormatPage from './components/FormatAll/FormatPage';
import './index.css';
class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Sidebar />
        <FormatPage />
      </div>
    );
  }
}

export default App;
