// App.js
import React from 'react';
import { UserProvider } from './context/UserContext'; 
import Routes from './routes/Routes'; 

function App() {
  return (
    <UserProvider>
      <Routes /> 
    </UserProvider>
  );
}

export default App;
