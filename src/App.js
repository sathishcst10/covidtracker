import React from 'react';
import './App.css';
import Base from './core/base';
import CountDetails from './dashboard/countDetails';
import DailyCounts from './dashboard/dailyCounts';
import regionwiseData from './dashboard/regionwiseData';

function App() {
  return (
    <div className="App">
      <Base>      
        {CountDetails()}
        {DailyCounts()}
        {regionwiseData()}
      </Base>
      
    </div>
  );
}

export default App;
