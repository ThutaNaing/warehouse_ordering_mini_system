import React from 'react';
import './App.css';

// import MainCom from './master_layout/MainCom'
import MainComBinder from './data_management/redux_context_binders/MainComBinder';

function App() {
  return (
      <div className="App">
          <MainComBinder></MainComBinder>
      </div>
  );
}

export default App;
