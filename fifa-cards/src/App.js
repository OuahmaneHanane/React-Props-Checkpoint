import React from 'react';
import PlayersList from './PlayersList';
import './App.css';


// Root component of the app
function App() {
  return (
    <div className="App">
      {/* Page header */}
      <h1 style={{ textAlign: 'center', margin: '20px' }}>
        FIFA Player Cards
      </h1>

      {/* Render the list of player cards */}
      <PlayersList />
    </div>
  );
}

export default App;
